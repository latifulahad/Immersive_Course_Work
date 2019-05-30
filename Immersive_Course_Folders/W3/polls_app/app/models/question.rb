class Question < ActiveRecord::Base
validates :text, :poll_id, presence: true

  belongs_to :poll,
  primary_key: :id,
  foreign_key: :poll_id,
  class_name: 'Poll'

  has_many :answer_choices,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: 'AnswerChoice' 

  has_many :responses,
  through: :answer_choices,
  source: :responses
  
  def results # N + 1 type
    ans, a_choices = {}, answer_choices
    answer_choices.each { |choice| ans[choice.text] = choice.responses.count }
    ans
  end

  def btr_results
    ans = {}
    self.answer_choices.includes(:responses).each { |ac| ans[ac.text] = ac.responses.length } 
    ans 
  end

  def bst_results
    acs = AnswerChoice.find_by_sql([<<-SQL, self.id])
    SELECT 
      answer_choices.text, COUNT(responses.id) as amt
    FROM 
      answer_choices 
    JOIN responses 
      ON responses.answer_choice_id = answer_choices.id
    WHERE 
      answer_choices.question_id = ?
    GROUP BY
      answer_choices.id 
    SQL

    acs.inject({}) do |acc, obj| 
      acc[obj.text] = obj.amt ; acc 
    end 
  end

end
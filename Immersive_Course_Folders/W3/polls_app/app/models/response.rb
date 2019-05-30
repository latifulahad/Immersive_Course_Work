class Response < ActiveRecord::Base
validates :respondent_id, :answer_choice_id, presence: true
validate :response_uniq, unless: -> { answer_choice.nil? }
validate :respondent_uniq, unless: -> { answer_choice.nil? }
validate :poll_creator_ban, unless: -> { answer_choice.nil? }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :respondent_id,
  class_name: 'User'
  
  belongs_to :answer_choice,
  primary_key: :id,
  foreign_key: :answer_choice_id,
  class_name: 'AnswerChoice'

  has_one :question,
  through: :answer_choice,
  source: :question

  def sibling_responses #2-query-way
    self.question.responses.where.not(id: self.id)
  end

  def s_res_optimal #single_query
    secure = { answer_choice_id: self.answer_choice_id, id: self.id }
    Response.find_by_sql([<<-SQL, secure])
      SELECT
        responses.*
      FROM (
        SELECT
          questions.*
        FROM
          questions
        JOIN
          answer_choices ON questions.id = answer_choices.question_id
        WHERE
          answer_choices.id = :answer_choice_id
      ) AS questions    -- THIS WILL => ques.*_4_self.answer_choice_id
      JOIN
        answer_choices ON questions.id = answer_choices.question_id
      JOIN
        responses ON answer_choices.id = responses.answer_choice_id
      WHERE
        (:id IS NULL) OR (responses.id != :id) --notice the first condition,incase the reciever isn't save! yet
    SQL
  end

  def respondent_already_answered?
    a = self.question.responses #this method wrks but 2_query...n + 1 type
    a.each { |res| return true if res.respondent_id == self.respondent_id }
    false
  end
  
  def ques_4_res(responss)
    a = []
    responss.each { |res_obj| a << res_obj.question }
    a
  end

  def user_responss
    Response.where(respondent_id: self.respondent_id)
  end
  
  private

  def response_uniq #my_attmept @mking this # w/o instructions
    res = user_responss    #1query
    q_ss = ques_4_res(res) #query/obj_from_res
    q_ss.each do |q|       #this # is 2 inefficient!!!
      if self.question == q 
        self.errors[:ques] << 'already has been voted on.'
      end
    end
  end

  def respondent_uniq #based_on_instruc
    if respondent_already_answered?
      self.errors[:respondent] << 'already voted on this question.'
    end
  end

  def poll_creator_ban
    ques = self.question.poll_id
    a = User.joins(:authored_polls).where('polls.id = ?', ques)
    if !a.empty?
      self.errors[:poll] << 'author CANNOT vote!'
    end
  end

end

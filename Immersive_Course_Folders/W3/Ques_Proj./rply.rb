require_relative 'ques'

class Replies
  attr_accessor :id, :author_id, :question_id, :reply, :parent_reply_id

  def self.find_by_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
    SELECT 
      *
    FROM 
      replies
    WHERE
      id = ? 
    SQL

    Replies.new(ans[0])
  end

  def self.find_by_user_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        author_id = ?
    SQL

    ans.map { |rply| Replies.new(rply) } 
  end

  def self.find_by_question_id(q_id) 
    ans = QuestionsDBConnection.instance.execute(<<-SQL, q_id)
      SELECT
        *
      FROM
        replies
      GROUP BY
        question_id
      HAVING
        question_id = ?
    SQL

    ans.map { |rply| Replies.new(rply) }
  end

  def initialize(options)
    @id = options['id']
    @author_id = options['author_id']
    @question_id = options['question_id']
    @reply = options['reply']
    @parent_reply_id = options['parent_reply_id']
  end

  def save
    if @id.nil?
      QuestionsDBConnection.instance.execute(<<-SQL, @author_id, @question_id, @reply, @parent_reply_id)
      INSERT INTO
      replies (author_id, question_id, reply, parent_reply_id)
      VALUES
      (?, ?, ?, ?)
      SQL
      @id = QuestionsDBConnection.instance.last_insert_row_id
    else
      ans = QuestionsDBConnection.instance.execute(<<-SQL, @reply, @parent_reply_id, @id)
      UPDATE
        replies
      SET
        reply = ?, parent_reply_id = ?
      WHERE
        id = ?
      SQL
    end
  end

  def author
    User.find_by_id(@author_id)
  end

  def question 
    Questions.find_by_id(@question_id)
  end

  def parent_reply
    raise('This is lead reply ;)') if @parent_reply_id.nil?

    Replies.find_by_id(@parent_reply_id)
  end

  def child_replies #Needs_T w/more entries in replies table
    ans, wanted_i = Replies.find_by_question_id(@question_id), 0 #will p => [ {rply1}, {rply2}, {rply3} ] 
    ans.each_with_index { |obj, i| wanted_i = i if obj.id == @id }
    ans[wanted_i + 1]
  end
end

require 'sqlite3'
require 'singleton'

class QuestionsDBConnection < SQLite3::Database
  include Singleton
  
  def initialize
    super('questions.db')

    self.type_translation = true
    self.results_as_hash = true
  end
end


class User
  attr_accessor :id, :fname, :lname

  def self.find_by_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
    SELECT 
      *
    FROM 
      users
    WHERE
      id = ? 
    SQL

    User.new(ans[0])
  end

  def self.find_by_name(f_nm, l_nm)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, f_nm, l_nm)
    SELECT
      *
    FROM
      users
    WHERE
      fname = ? AND lname = ?
    SQL

    User.new(ans[0])
  end
  
  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions 
    Questions.find_by_author_id(@id)
  end

  def authored_replies
    Replies.find_by_user_id(@id)
  end
  
  def followed_questions
    QuestionFollows.followed_questions_for_user_id(@id)
  end
end


class Questions
  attr_accessor :id, :title, :body, :author_id

  def self.find_by_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
    SELECT 
      *
    FROM 
      questions
    WHERE
      id = ? 
    SQL

    Questions.new(ans[0])
  end

  def self.find_by_author_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        questions
      JOIN
        users ON users.id = questions.author_id
      WHERE
        author_id = ?
    SQL

    ans.map { |q_es| Questions.new(q_es) } 
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def author
    User.find_by_id(@author_id)
  end

  def followers
    QuestionFollows.followers_for_question_id(@id)
  end
end


class QuestionFollows
  attr_accessor :id, :question_id, :follower_id

  def self.find_by_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
    SELECT 
      *
    FROM 
      question_follows
    WHERE
      id = ? 
    SQL

    QuestionFollows.new(ans[0])
  end

  def self.followed_questions_for_user_id(user_i)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, user_i)
      SELECT
        *
      FROM
        questions
      JOIN
        question_follows ON question_follows.question_id = questions.id
      WHERE
        follower_id = ?
    SQL

    ans.map { |q| Questions.new(q) }
  end
  
  def self.followers_for_question_id(q_id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, q_id)
      SELECT DISTINCT
        *
      FROM
        users
      JOIN
        question_follows ON question_follows.follower_id = users.id
      WHERE
        question_id = ? 
    SQL

    ans.map { |obj| User.new(obj) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @follower_id = options['follower_id']
  end

  def replies 
    Replies.find_by_question_id(@question_id)
  end
end


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


class QuestionLikes
  attr_accessor :id, :question_id, :author_id

  def self.find_by_id(id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, id)
    SELECT 
      *
    FROM 
      question_likes
    WHERE
      id = ? 
    SQL

    QuestionLikes.new(ans[0])
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @author_id = options['author_id']
  end
end

# Medium
# Question#followers
# One-liner calling QuestionFollow method.
# Again, test your queries in the console before moving on.
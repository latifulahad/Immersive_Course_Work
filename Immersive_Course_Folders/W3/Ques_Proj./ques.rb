require 'sqlite3'
require 'singleton'
require_relative 'user'
require_relative 'q_follow'
require_relative 'rply'
require_relative 'q_like'

class QuestionsDBConnection < SQLite3::Database
  include Singleton
  
  def initialize
    super('questions.db')

    self.type_translation = true
    self.results_as_hash = true
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

  def self.most_followed(num)
    QuestionFollows.most_followed_questions(num)
  end
  
  def self.most_liked(num) 
    QuestionLikes.most_liked_questions(num)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def save
    if @id.nil?
      QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @author_id)
      INSERT INTO
      questions (title, body, author_id)
      VALUES
      (?, ?, ?)
      SQL
      @id = QuestionsDBConnection.instance.last_insert_row_id
    else
      ans = QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @author_id, @id)
      UPDATE
        questions
      SET
        title = ?, body = ?, author_id = ?
      WHERE
        id = ?
      SQL
    end
  end

  def author
    User.find_by_id(@author_id)
  end

  def followers
    QuestionFollows.followers_for_question_id(@id)
  end

  def likers
    QuestionLikes.likers_for_question_id(@id)
  end

  def num_likes
    QuestionLikes.num_likes_for_question_id(@id)
  end
end
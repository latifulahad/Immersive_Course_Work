require_relative 'ques'

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

  def self.likers_for_question_id(q_id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, q_id)
    SELECT
      *
    FROM
      users
    JOIN
      question_likes ON question_likes.author_id = users.id
    WHERE
      question_id = ?
    SQL

    ans.map { |author| User.new(author) }
  end

  def self.num_likes_for_question_id(q_id)
    QuestionsDBConnection.instance.execute(<<-SQL, q_id)
    SELECT
      count(author_id) AS Total_Likes
    FROM
      question_likes
    WHERE
      question_id = ?
    SQL
  end

  def self.liked_questions_for_user_id(u_id)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, u_id)
    SELECT
      *
    FROM
      questions
    JOIN
      question_likes on question_likes.question_id = questions.id
    GROUP BY
      questions.id
    HAVING
      questions.author_id = ?
    SQL

    ans.map { |q| Questions.new(q) } 
  end
  
  def self.most_liked_questions(num)
    ans = QuestionsDBConnection.instance.execute(<<-SQL, num)
    SELECT 
      * 
    FROM
      questions
    JOIN
      question_likes ON question_likes.question_id = questions.id
    GROUP BY
      questions.id
    ORDER BY
      count(question_likes.author_id) DESC
    LIMIT
      ?
    SQL

    ans.map{ |q| Questions.new(q) } 
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @author_id = options['author_id']
  end
end
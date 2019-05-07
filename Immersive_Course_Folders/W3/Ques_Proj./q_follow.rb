require_relative 'ques'

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
  
  def self.most_followed_questions(num)
    QuestionsDBConnection.instance.execute(<<-SQL, num)
    SELECT
      question_id, count(follower_id) as Total_folllowers
    FROM
      question_follows
    GROUP BY
      question_id
    ORDER BY
      count(follower_id) DESC
    LIMIT
      ?
    SQL
  end
#   d          fname       lname
#   ----------  ----------  ----------
#   1           Ned         Ruggeri
#   2           Kush        Patel
#   3           Earl        Cat
#   4           Latiful     Ahad
#   5           Sanam       Mariam
#   6           Suravi      Ahmed
#   7           Nafiz       Donna
#   question_id  N_followers
# -----------  -----------
# 3            4
# 2            2
# 1            1
  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @follower_id = options['follower_id']
  end

  def replies 
    Replies.find_by_question_id(@question_id)
  end
end
require_relative 'ques'

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

  def save
    if @id.nil?
      QuestionsDBConnection.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
      users (fname, lname)
      VALUES
      (?, ?)
      SQL
      @id = QuestionsDBConnection.instance.last_insert_row_id
    else
      ans = QuestionsDBConnection.instance.execute(<<-SQL, @fname, @lname, @id)
      UPDATE
        users
      SET
        fname = ?, lname = ?
      WHERE
        id = ?
      SQL
    end
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

  def liked_questions
    QuestionLikes.liked_questions_for_user_id(@id)
  end

  def average_karma # Avg number of likes for a User's questions.
    ans = QuestionsDBConnection.instance.execute(<<-SQL, @id)
      SELECT
        avg(author_id) as avg_likes
      FROM
        question_likes
      GROUP BY
        question_id 
      HAVING
       question_id IN (select question_id from questions where author_id = ?)
    SQL

    ans[0]
  end
end

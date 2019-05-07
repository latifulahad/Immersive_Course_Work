require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :id, :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute('SELECT * FROM plays')
    data.map { |datum| Play.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id, self.id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end

  def self.find_by_title(title)
    PlayDBConnection.instance.execute(<<-SQL, title)
    SELECT
      *
    FROM
      plays
    WHERE
      title = ?
    SQL
  end

  def self.find_by_playwright(name)
    writer = Playwright.find_by_name(name)
    PlayDBConnection.instance.execute(<<-SQL, writer['id'])
    SELECT
      *
    FROM
      plays
    WHERE
      playwright_id = ?
    SQL

    # plays.map { |pl| Play.new(pl) }
  end
end


class Playwright

  def self.all
    writers = PlayDBConnection.instance.execute('SELECT * FROM playwrights')
    writers.map { |writer| Playwright.new(writer) }
  end

  def self.find_by_name(name)
      writer = PlayDBConnection.instance.execute(<<-SQL, name)
      SELECT *
      FROM playwrights 
      WHERE name = ?
      SQL

      return nil if writer.empty?
      writer[0]
  end

  attr_accessor :name, :birth_year, :id
  def initialize(options)
    @name = options['name'] 
    @birth_year = options['birth_year']
    @id = options['id']
  end

  def create
    raise("#{self} already exists!") if self.id != nil

    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year)
    INSERT INTO
      playwrights (name, birth_year)
    VALUES
      (?, ?)
    SQL

    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise("#{self} is not present in playwrites table") unless self.id 

    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year, self.id)
    UPDATE
      playwrights
    SET
      name = ?, birth_year = ?
    WHERE
      id = ?
    SQL
  end

  def get_plays
    ans = PlayDBConnection.instance.execute(<<-SQL, @id)
    SELECT
      title
    FROM
      plays
    WHERE
      playwright_id = ?
    SQL

    ans[0]
  end
end
# Let's add the following methods to our ORM:

# Play::find_by_title(title)  DONE!!!
# Play::find_by_playwright(name) (returns all plays written by playwright) DONE!!!
# In addition, create a Playwright class and add the following methods to our ORM.

# Playwright::all DONE!!!
# Playwright::find_by_name(name) DONE!!!
# Playwright#new (this is the initialize method) DONE!!!
# Playwright#create DONE!!!
# Playwright#update DONE!!!
# Playwright#get_plays (returns all plays written by playwright) DONE!!!
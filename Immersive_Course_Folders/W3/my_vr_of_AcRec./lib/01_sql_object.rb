require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns

    col = DBConnection.execute2(<<-SQL).first
      SELECT 
        *
      FROM
        #{self.table_name}
      LIMIT
        0
    SQL

    col.map! { |cl| cl.to_sym }
    @columns = col
  end

  def self.finalize!
    columns.each do |attr_name|
      define_method(attr_name) do 
        self.attributes[attr_name]
      end

      define_method("#{attr_name}=") do |value|
        self.attributes[attr_name] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.name.underscore.pluralize
  end

  def self.all
    all = DBConnection.execute(<<-SQL)
    SELECT 
      * 
    FROM
      #{table_name}
    SQL

    parse_all(all)
  end

  def self.parse_all(results)
    results.map { |obj| self.new(obj) }
  end

  def self.find(id)
    answer = DBConnection.execute(<<-SQL, id)
    SELECT
      #{table_name}.*
    FROM
      #{table_name}
    WHERE
      #{table_name}.id = ?
    SQL

    parse_all(answer).first
  end

  def initialize(params = {})
    params.each do |col, val|
      col = col.to_sym
      if self.class.columns.include?(col)
        self.send("#{col}=", val)
      else
        raise "unknown attribute #{col}"
      end
    end
  end

  def attributes
    @attributes || {}
  end

  def attribute_values
    self.class.columns.map { |attr| self.send(attr) }
  end

  def insert
    columns = self.class.columns.drop(1)
    col = columns.map(&:to_s).join(",")
    ques = (["?"] * columns.count).join(',')

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
    INSERT INTO
      #{self.class.table_name} (#{col})
    VALUES
      (#{ques})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    set_line = self.class.columns.drop(1).map { |atr| "#{atr} = ? " }.join(",")
    DBConnection.execute(<<-SQL, *attribute_values.drop(1), self.id)
    UPDATE
      #{self.class.table_name}
    SET
      #{set_line}
    WHERE
      #{self.class.table_name}.id = ?
    SQL
  end

  def save
    id.nil? ? insert : update
  end
end

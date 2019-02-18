class Employee
attr_reader :salary, :boss

  def initialize(name, title, salary, boss)
    @name, @title, @salary, @boss = name, title, salary, boss
    @boss.employee << self unless @boss == nil
  end

  def bonus(amount)
    @salary * amount
  end

end
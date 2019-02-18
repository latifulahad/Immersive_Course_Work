require_relative 'Employee'

class Manager < Employee
attr_reader :salary
attr_accessor :employee

  def initialize(name, title, salary, boss = nil)
    super
    @employee = [] 
  end

  def bonus(amount)
    salary_accumilation = 0
    @employee.each do |person|
      salary_accumilation += person.salary
      if person.is_a?(Manager)
        person.employee.each { |pupil| salary_accumilation += pupil.salary }
      end
    end

    
    salary_accumilation * amount
  end
end

#Tests
a = Manager.new("Sabit", "SnE", 100000)
b = Employee.new("Amar", "SoftE", 85000, a)
c = Employee.new("Anik", "SoftE", 75000, a)
d = Employee.new("Rash", "HardE", 65000, a)

# Auto registration in Employee initialize Works
# puts a.employee 

# Both Parent && Child #bonus works
# p a.bonus(2)
# p b.bonus(1) 




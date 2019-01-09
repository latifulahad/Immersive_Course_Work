class HumanPlayer
  attr_accessor :strike_letters
  attr_reader :name

  def initialize(name)
    @name = name
    @strike_letters = ""
  end

  def get_guess
    puts "Hey there #{name}, choose a letter between a..z:__ "
    guess = gets.chomp
  end

  def strike
    letter_h = { 0=>"G", 1=>"H", 2=>"O", 3=>"S", 4=>"T" }
    strike_number = strike_letters.length
    strike_letters << letter_h[strike_number] 
  end 

end 



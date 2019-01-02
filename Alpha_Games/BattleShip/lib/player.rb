class HumanPlayer
attr_reader :name

  def initialize(name)
    @name = name 
  end 
  
  def prompt
    puts "Choose a position, like so (row, col)."
  end 

  def get_play
    pos = gets.chomp.split(",").map(&:to_i)
    pos
  end

end

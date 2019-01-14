class HumanPlayer
  attr_reader :name
  def initialize(name)
    @name = name
  end
  
  def get_guess
    a= []
    puts "#{@name} take a look at the grid and select positions of interest ex. row, col"
    guess = gets.chomp.split.map(&:to_i)
    guess
  end
  
end

# a = HumanPlayer.new("sabit")
# p a.get_guess
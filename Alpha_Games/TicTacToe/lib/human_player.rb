class HumanPlayer
attr_reader :name 
attr_accessor :mark 

  def initialize(name)
    @name = name 
  end 

  def get_move
    puts "Where would you like to place your mark? (row, col)"
    pos = gets.split(",").map(&:to_i) 
  end 

  def display(board)
    puts "col:      0    1     2"
    puts "row(0) #{board.grid[0]}" 
    puts "row(1) #{board.grid[1]}"
    puts "row(2) #{board.grid[2]}" 
  end 

end

require "colorize"
require_relative "cursor"
require_relative "board" #Temporary

class Display

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], @board)
  end

  def render
    pos = @cursor.cursor_pos
    @board[pos] = @board[pos].to_s.colorize(:background => :magenta)
    #Below vvv needs to be updated
    puts "columns 0 to 7 "
    puts "row 0: #{@board.grid[0].join}"
    puts "row 1: #{@board.grid[1]}"
    puts "row 2: #{@board.grid[2]}"
    puts "row 3: #{@board.grid[3]}"
    puts "row 4: #{@board.grid[4]}"
    puts "row 5: #{@board.grid[5]}"
    puts "row 6: #{@board.grid[6]}"
    puts "row 7: #{@board.grid[7]}"
  end 

  def run #This method is for testing
    3.times do
      @cursor.get_input
      p @cursor.cursor_pos # YES THIS GETS UPDATED
      render
    end 
  end
  
end

# Tests
# a = "sabit"
# p String.colors
# puts a.colorize(:background => :light_yellow)

a = Board.new
b = Display.new(a)
c, c1, c2 = [0, 0], [0, 1], [0, 2]
a[c] = "sabit" 
a[c1] = "suravi"
a[c2] = "sanam"
puts b.run 
require "colorize"
require_relative "board"
require_relative "tile"

class Game 
attr_reader :board, :completed_b

  def initialize(player, board, completed_b)
    @player = player
    @board = board
    @completed_b = completed_b
  end
  
  def render 
    board_2 = add_color_display #Look @ the private method
    puts "columns: 0    -    8 "
    puts "row 0: #{board_2[0].join(" ")}"
    puts "row 1: #{board_2[1].join(" ")}"
    puts "row 2: #{board_2[2].join(" ")}"
    puts "row 3: #{board_2[3].join(" ")}"
    puts "row 4: #{board_2[4].join(" ")}"
    puts "row 5: #{board_2[5].join(" ")}"
    puts "row 6: #{board_2[6].join(" ")}"
    puts "row 7: #{board_2[7].join(" ")}"
    puts "row 8: #{board_2[8].join(" ")}"
  end

  def won?

    @board.grid.each_with_index do |sub, i|
      sub.each_with_index do |tl, i_1|
        return false if tl.value != completed_b[i][i_1]
      end
    end
    
    true
  end

  def play
    
    until won?
      render
      puts " Heads up, you'll need to place a lot of inputs per attempt!"

      49.times do
        puts "Select a pos: row, column(1, 1)"
        pos = gets.chomp.split(",").map(&:to_i)
        puts "Select a value for this position ex. 1, 2, 3, etc."
        wanted_v = gets.chomp
        @board[pos] = wanted_v
      end 

    end

    puts " You've done it #{@player}, Good Job!!!"
  end


  private

  def display_vers_board
    tl_arr = []

    @board.grid.each do |row|
      tl_arr << row.map { |tl| tl.value }
    end

    tl_arr
  end
  
  def add_color_display
    board_1 = []
    board_0 = display_vers_board

    board_0.each do |sub|
      board_1 << sub.map do |tl|
        if tl != "0"
          tl.colorize(:yellow)
        else
          tl
        end
      end
    end

    board_1
  end

  def expose_tile_value(array)
    a = []
    array.each { |sub| a << sub.split("") }
    a
  end

end 

if __FILE__ == $PROGRAM_NAME
  p "Hi there, please print your name:"
  name = gets.chomp
  a = File::readlines("sudoku1.txt").map(&:chomp)
  c = File::readlines("sudoku1_solved.txt").map(&:chomp)
  b = Board.setup(a)
  d = Game.new(name, b, c)
  d.play
end

#BOARD test
# d.render
# d.expose_tile_value(c)
# d.display_vers_board

# COLORIZE test
# p String.colors
# a = "3"
# puts a.colorize(:yellow)
require "colorize"
require_relative "cursor"

class Display
attr_accessor :cursor #I did this to follow UML for player's cursor needs

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], @board) 
  end

  def render
    new_b = color_board
    puts "Col 0 1 2 3 4 5 6 7"
    puts "R 0 #{new_b[0].join(" ")}"
    puts "R 1 #{new_b[1].join(" ")}"
    puts "R 2 #{new_b[2].join(" ")}"
    puts "R 3 #{new_b[3].join(" ")}"
    puts "R 4 #{new_b[4].join(" ")}"
    puts "R 5 #{new_b[5].join(" ")}"
    puts "R 6 #{new_b[6].join(" ")}"
    puts "R 7 #{new_b[7].join(" ")}"
  end 

  private

  def color_board
    board_w_symbols, colored_b = setup_b_4_coloring, Array.new(8) { Array.new }

    board_w_symbols.each_with_index do |row, i|
      row.each { |piece| colored_b[i] << piece[0].to_s.colorize(piece[1]) }
    end
    colored_b
  end

  def setup_b_4_coloring
    new_b = Array.new(8) { Array.new }
    @board.grid.each_with_index do |row, i|
      row.each { |piece| new_b[i] << [piece.symbol, piece.color] }
    end
    new_b 
  end
  
end

# Tests for coloring.....
# a = [1, 2]
# puts a[0].to_s.colorize(:red)
# p String.colors
# b = a.map {|name| name.to_s.colorize(:light_yellow) }
# puts b.join(" ")

# a = Board.new
# b = Display.new(a)
# c, c1, c2 = [0, 0], [0, 1], [0, 2]
# a[c] = "sabit" 
# a[c1] = "suravi"
# a[c2] = "sanam"
# puts b.run 
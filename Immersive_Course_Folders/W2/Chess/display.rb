require "colorize"
require_relative "cursor"
# require_relative "board" #Temporary for testing

class Display
attr_accessor :cursor #I did this to follow UML for player's cursor needs

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], @board) 
  end

  def render
    new_b = color_board
    puts new_b[0].join(" ")
    puts new_b[1].join(" ")
    puts new_b[2].join(" ")
    puts new_b[3].join(" ")
    puts new_b[4].join(" ")
    puts new_b[5].join(" ")
    puts new_b[6].join(" ")
    puts new_b[7].join(" ")
  end 

  private

  def color_board
    row_colors = { 0=>:green, 1=>:green, 2=>:light_blue, 3=>:light_blue,
    4=>:light_blue, 5=>:light_blue, 6=>:red, 7=>:red }
    board_w_symbols, colored_b = setup_b_4_coloring, Array.new(8) { Array.new }

    board_w_symbols.each_with_index do |row, i|
      row.each { |piece| colored_b[i] << piece.to_s.colorize(row_colors[i]) }
    end
    colored_b
  end

  def setup_b_4_coloring
    new_b = Array.new(8) { Array.new }
    @board.grid.each_with_index do |row, i|
      row.each { |piece| new_b[i] << piece.symbol }
    end
    new_b 
  end
  # def run #This method is for testing
  #   3.times do
  #     @cursor.get_input
  #     p @cursor.cursor_pos # YES THIS GETS UPDATED
  #     render
  #   end 
  # end
  
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
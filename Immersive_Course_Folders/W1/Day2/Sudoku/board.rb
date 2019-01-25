require_relative "tile"

class Board
attr_reader :grid 

  def self.setup(partial_board)
    grid_0 = Array.new(9) { Array.new }
    arr = []
    arr_1 = []

    partial_board.each { |sub| arr << sub.split("") }
    arr.each do |sub|
      sub.each { |el| arr_1 << el }
    end

    arr_1.each_with_index do |el, i|
      if i < 9
        grid_0[0] << Tile.new(el)
      elsif i < 18
        grid_0[1] << Tile.new(el)
      elsif i < 27
        grid_0[2] << Tile.new(el)
      elsif i < 36
        grid_0[3] << Tile.new(el)
      elsif i < 45
        grid_0[4] << Tile.new(el)
      elsif i < 54
        grid_0[5] << Tile.new(el)
      elsif i < 63
        grid_0[6] << Tile.new(el)
      elsif i < 72
        grid_0[7] << Tile.new(el)
      elsif i < 81
        grid_0[8] << Tile.new(el)
      end
    end

    Board.new(grid_0)
  end

  def initialize(grid)
    @grid = grid 
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, num)
    x, y = pos
    num_1 = num.to_s
    @grid[x][y].value = num_1
  end

 end

# FILE reading test
# a = File::readlines("sudoku1.txt").map(&:chomp)
# p a

# BOARD code test
# b = Board.setup(a)
# p b.grid
# pos = [0, 2]
# b[pos] = 5 
# p b[pos].value


require_relative "piece"
require_relative "stepable"

class King < Piece
  include Stepable
  attr_reader :symbol

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :K
    @color = color
  end

  def move
    type = "one"
    move_dir(type)
  end

end

#Test cases 
# a = Board.new
# d = a.dup 
# c = [0, 0]
# b = King.new(d, c, :red)
# p b.color
# p a[c] = b.symbol
# p a.grid
# p b.board.grid
# p b.move => [[0, 1], [1, 1], [1, 0]] #WORKS

class Knight < Piece
  include Stepable
  attr_reader :symbol

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :k
    @color = color
  end

  def move
    type = "other"
    move_dir(type)
  end

end

# Test cases
# a = Board.new
# c = [4, 4]
# b = Knight.new(a, c)
# p b.move #=> [[3, 2], [5, 2], [2, 3], [2, 5], [3, 6], [5, 6],[6, 3], [6, 5]] WORKS

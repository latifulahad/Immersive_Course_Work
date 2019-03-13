require_relative "piece"
require_relative "slideable"

class Rook < Piece
  include Slideable
  attr_reader :symbol

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :R
    @color = color
  end

  def move
    directions = ["horizontal", "vertical"]
    move_dir(directions)
  end

end

#Test Below cases Work
#  b = Board.new
#  c = [0, 0]
#  a = Rook.new(b, c, :red)
#  p a.board
# p a.move_dir

# b[c] = a 
# p b.grid
# p a.color

class Queen < Piece
  include Slideable
  attr_reader :symbol

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :Q
    @color = color
  end

  def move
    directions = ["diagonal", "horizontal", "vertical"]
    move_dir(directions)
  end

end


class Bishop < Piece
  include Slideable
  attr_reader :symbol

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :B
    @color = color
  end

  def move
    directions = ["diagonal"]
    move_dir(directions)
  end

end
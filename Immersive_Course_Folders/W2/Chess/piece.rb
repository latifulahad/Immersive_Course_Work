# require_relative "board" #Not needed for FINAL edition

class Piece
  attr_accessor :board, :c_position, :color 

  def initialize(board, c_position)
    @board = board
    @c_position = c_position
    @color = :light_blue
  end

  def valid_moves #Removes risky mvs from move method
    og = c_position
    ans = self.move.reject { |mv| risky_mv?(mv) }
    board.move_piece_alt(c_position, og)#to avoid infinate loop alt
    ans
  end

  private

  def risky_mv?(mv)
    board_2 = board.dup
    board_2.move_piece_alt(c_position, mv)#to avoid infinate loop alt
    board_2.in_check?(color)
  end

end
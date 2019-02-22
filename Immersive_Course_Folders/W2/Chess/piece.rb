require_relative "board"

class Piece
  attr_reader :board, :c_position

  def initialize(role, board)
    @role = role
    @board = board
    @c_position = nil
  end

  def valid_mv?(start_p, end_p)
    #code below is mock
    return false if end_p == [0, 0]
    true 
  end

end
require_relative "piece"

class Board
attr_reader :grid

  def initialize
    @grid = Array.new(8) { Array.new(8) }
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, value)
    x, y = pos
    @grid[x][y] = value
  end

  def move_piece(start_p, end_p) #WORKS
    raise ArgumentError.new("No piece @ start_pos") if self[start_p] != self[start_p].is_a?(Piece) #Incomplete this is suppose to raise for instance of class Null 

    peice = self[start_p]
    if !peice.valid_mv?(start_p, end_p)
      raise ArgumentError.new("end_pos not feasible")
    end

    self[end_p] = peice
    self[start_p] = nil #change to instance of class Null < Piece 
  end

  def valid_mv?(pos)
    x, y = pos
    if x < 0 || x > 7
      return false
    elsif y < 0 || y > 7
      return false
    end 
    true
  end

end

#Test
 a = Board.new
# p a.board
 a_1 = Piece.new("hero")

#Test cases
 b, c, d = [0, 0], [0, 2], [0, 4]
 a[b] = a_1
#  a.move_piece(b, c) #checking if #method works
#  a.move_piece(d, b) #checking raise for Null instance
# p a[c]
# p a[b]

# e = [0, 7]
# p a.valid_mv?(e) #WORKS
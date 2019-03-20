require_relative "piece"
#We havent written code for opposite side arrival perk as of yet.
class Pawn < Piece
attr_reader :symbol, :status

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :P
    @color = color
    @status = "new"
  end

  def move
    dir = determine_dir #side of start

    if determine_first_mv? #two step eligibility...
      moves = poten_mvs("yes", dir)
      @status = "not new"
    else
      moves = poten_mvs("no", dir)
    end

    moves
  end

  private

  def determine_dir #Helps move.....WORKS
    color == :green ? "add" : "minus" 
  end 

  def determine_first_mv? #Helps move.....WORKS
    status == "new" ? true : false
  end

  def within_limits?(pos)
    x, y = pos
    if !x.between?(0, 7)
      return false
    elsif !y.between?(0, 7)
      return false
    end

    true
  end

  def  poten_mvs(first, dir) #Helps move
    moves = []
    x, y = c_position
    x1, x2 = (x + 2), (x - 2)

    if first == "yes" && dir == "add" 
      poten_mv = [[(x + 1), y], [x1, y]]
      if poten_mv.all? { |sq| board[sq].is_a?(Null) } 
        return poten_mv
      else
        other_mvs = generate_mv(dir)
        other_mvs.each { |mv| moves << mv }
      end
    elsif first == "yes" && dir == "minus"
      poten_mv = [[(x - 1), y], [x2, y]]
      if poten_mv.all? { |sq| board[sq].is_a?(Null) } 
        return poten_mv
      else
        other_mvs = generate_mv(dir)
        other_mvs.each { |mv| moves << mv }
      end
    else #second..final move
      other_mvs = generate_mv(dir)
      other_mvs.each { |mv| moves << mv }
    end

    moves
  end

  def generate_mv(dir) #Helps poten_mvs
    moves, diagonals = [], [[0, -1], [0, +1]]
    x, y = c_position
    x1, x2 = (x + 1), (x - 1)
    poten, poten_2 = [x1, y], [x2, y]

    if dir == "add" && within_limits?(poten)
      if board[poten].is_a?(Null)
        return moves << poten
      else
        diagonals.each do |y_mod|
          poten_3 = [x1, (y + y_mod[1])]
          moves << poten_3 if within_limits?(poten_3)
        end
      end
    else #For minus dir
      if board[poten_2].is_a?(Null) && within_limits?(poten_2)
        return moves << poten
      else 
        diagonals.each do |y_mod|
          poten_3 = [x2, (y + y_mod[1])]
          moves << poten_3 if within_limits?(poten_3)
        end
      end
    end

    moves
  end
  
end

#Test Cases
# a = Array.new(8) { Array.new(8) }
# pos = [1, 1]
# c = Pawn.new(a, pos, :green)
# a[1][1] = c
 
# p c.determine_dir #WORKS
# p c.determine_first_mv? #WORKS


# b = Pawn.new(a, c, :red)WORKS
# p b.color

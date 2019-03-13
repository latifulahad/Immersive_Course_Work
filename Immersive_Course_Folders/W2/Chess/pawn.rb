require_relative "piece"
# require_relative "stepable"

class Pawn < Piece
attr_reader :symbol, :status

Pawn_details = { 
  "Start_pos"=>[1, 6], 
  "cordinates"=>[[0, -1], [0, +1], [-1, 0]],
  "first"=>[[+2, 0], [-2, 0]]  
}

  def initialize(board, c_position, color)
    super(board, c_position)
    @symbol = :P
    @color = color
    @status = "new"
  end

  def move
    #check color to determine direction     DONE
    #first move enables two square BUT not to conqure
    #+1 to x ONLY
    #unless blocked UPON which diagonal is employed
    #if you reach otherside you have all moves available. BIG HELPER
    dir = determine_dir

    if determine_first_mv? 
      moves = poten_mvs("yes", dir)
      @status = "not new"
    else
      moves = poten_mvs("no", dir)
    end

    moves
  end

  #private
  def determine_dir #Helps move.....WORKS
    color == :green ? "add" : "minus" 
  end 

  def determine_first_mv? 
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

  def  poten_mvs(type, dir)
    moves = []
    increment = dir == "add" ? +1 : -1
    if type == "yes" #first_mv
      #use dir to make new locations
      increment += 1

    else
    end
  end

end

#Test Cases
a = Array.new(8) { Array.new(8) }
pos = [1, 1]
c = Pawn.new(a, pos, :green)
a[1][1] = c

p c.determine_dir #WORKS
p c.determine_first_mv?

# b = Pawn.new(a, c, :red)WORKS
# p b.color

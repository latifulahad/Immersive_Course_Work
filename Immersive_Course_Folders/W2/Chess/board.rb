require_relative 'piece'
require_relative 'king_knight'
require_relative 'pawn'
require_relative 'null_piece'
require_relative 'rook_qn_bish'

PIECES = { 
  "K"=>[[0, 3], [7, 3]], 
  "Q"=>[[0, 4], [7, 4]], 
  "B"=>[[0, 2], [0, 5], [7, 2], [7, 5]], 
  "R"=>[[0, 0], [0, 7], [7, 0], [7, 7]], 
  "k"=>[[0, 1], [0, 6], [7, 1], [7, 6]]
 }

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
    piece = self[start_p]
    self[end_p], self[start_p] = piece, Null.new
    piece.c_position = end_p #I added this after method became func, becuz mving piece wasn't getin updated c_pos
  end

  def move_piece_alt(start_p, end_p) #This is to avoid infinate loop from Piece#valid_moves due to recursive call without basecase.... 
    piece = self[start_p]
    self[end_p], self[start_p] = piece, Null.new
    piece.c_position = end_p 
  end

  def valid_mv?(pos) #WORKS
    x, y = pos
    if x < 0 || x > 7
      return false
    elsif y < 0 || y > 7
      return false
    end 
    true
  end

  def populate
    2.upto(5) do |x| #This sets up the empty space
      (0..7).each do |y|
        pos = [x, y] 
        self[pos] = Null.new 
      end
    end

    8.times do |y| #This places Pawns
      x = 1
      pos = [x, y]
      self[pos] = Pawn.new(self, pos, :green)  
    end

    8.times do |y|
      x = 6
      pos = [x, y]
      self[pos] = Pawn.new(self, pos, :red)  
    end

    PIECES.each do |k, v|
      if k == "K" 
        self[v[0]] = King.new(self, v[0], :green)
        self[v[1]] = King.new(self, v[1], :red)
      elsif k == "Q"
        self[v[0]] = Queen.new(self, v[0], :green)
        self[v[1]] = Queen.new(self, v[1], :red)
      elsif k == "B"
        self[v[0]], self[v[1]] = Bishop.new(self, v[0], :green), Bishop.new(self, v[1], :green)
        self[v[2]], self[v[3]] = Bishop.new(self, v[2], :red), Bishop.new(self, v[3], :red)
      elsif k == "R"
        self[v[0]], self[v[1]] = Rook.new(self, v[0], :green), Rook.new(self, v[1], :green)
        self[v[2]], self[v[3]] = Rook.new(self, v[2], :red), Rook.new(self, v[3], :red)
      else
        self[v[0]], self[v[1]] = Knight.new(self, v[0], :green), Knight.new(self, v[1], :green)
        self[v[2]], self[v[3]] = Knight.new(self, v[2], :red), Knight.new(self, v[3], :red)
      end
    end

  end

  def in_check?(color) #WORKS
    king = find_king(color) #King's pos
    opponent_c = find_enemy_c(color) #Detemine ops color
    poten_att_mv = find_all_poten_mvs(opponent_c) #All mvs from ops pieces
    poten_att_mv.include?(king)
  end

  def checkmate?(color) #WORKS
    in_check?(color) && !defending_mv?(color) ? true : false
  end
  
  private

  def defending_mv?(color) #WORKS
    kill_path, king_loc, enemy_c = 0, find_king(color), find_enemy_c(color)
    kings_mv = self[king_loc].move # final self_defense

    grid.each_with_index do |row, i| 
      row.each_with_index do |p, i2|
       
        if p.color == enemy_c && p.move.include?(king_loc) 
          killa_pos = [i, i2]
          kill_path = kill_route(killa_pos, king_loc) #this will generate path btw killar & king
          return true if kings_mv.any? { |mv| !p.move.include?(mv) }
        end
      end
    end
  
    my_positions = find_all_poten_mvs(color)#checks if any pieces can save :K by getting in the way
    kill_path.each do |pos| 
      if my_positions.include?(pos) 
        return true
      end
    end

    false
  end

  def find_enemy_c(color)
    color == :red ? :green : :red
  end

  def find_king(color) #WORKS
    king = 0

    grid.each do |row|
      row.each do |piece|
       if piece.color == color && piece.symbol == :K
         king = piece.c_position
       end
      end
   end

   king
  end

  def find_pieces(color) # WORKS, Helps f_all_poten_mv
    pieces = []

     grid.each do |row|
      row.each do |piece|
        pieces << piece if piece.color == color
      end
    end

    pieces
  end

  def find_all_poten_mvs(color) #WORKS
    wanted_pieces = find_pieces(color)
    poten_mvs = []

    wanted_pieces.each do |p|
      moves = p.move 
      moves.each { |mv| poten_mvs << mv } 
    end

    poten_mvs
  end

  def kill_route(killers_pos, king_pos) #WORKS Helps defending_mv?
    x, y = killers_pos
    x1, y1 = king_pos
    if x1 == x #horizontal threat
      path = increment_with(1, killers_pos, king_pos)
    elsif y1 == y #vertical threat
      path = increment_with(0, killers_pos, king_pos)
    else #diagonally threat
      path = increment_with(2, killers_pos, king_pos)
    end

    path << killers_pos #to ensure killer's position is also considered when planning defense
  end

  def increment_with(axis_num, a, b) #WORKS Helps kill_route
    positions = []
    d_positions = []

    if axis_num == 0 #Vertical Attack
      x, x1 = a[0], b[0]
      y = a[1]
      case x <=> x1
      when -1 
        (x + 1...x1).each { |new_x| positions << [new_x, y] }
      when +1
        (x1 + 1...x).each { |new_x| positions << [new_x, y] }
      end
    elsif axis_num == 1 #Horizontal Attack
      y, y1 = a[1], b[1]
      x = a[0]
      case y <=> y1
      when -1
        (y + 1...y1).each { |new_y| positions << [x, new_y] }
      when +1
        (y1 + 1...y).each { |new_y| positions << [x, new_y] }
      end
    else #Diagonal
      ysss = []
      x, x1 = a[0], b[0]
      y, y1 = a[1], b[1]
      case x <=> x1
      when -1
        (x + 1...x1).each { |new_x| positions << new_x }
        if y > y1 
          (y1 + 1...y).each { |new_y| ysss << new_y }
          positions.each_with_index do |x, i|
            d_positions << [x, ysss[i]]
          end
          return d_positions
        else
          (y + 1...y1).each { |new_y| ysss << new_y }
          positions.each_with_index do |x, i|
            d_positions << [x, ysss[i]]
          end
          return d_positions
        end
      when +1
        (x1 + 1...x).each { |new_x| positions << new_x }
        if y > y1 
          (y1 + 1...y).each { |new_y| ysss << new_y }
          positions.each_with_index do |x, i|
            d_positions << [x, ysss[i]]
          end
          return d_positions
        else
          (y + 1...y1).each { |new_y| ysss << new_y }
          positions.each_with_index do |x, i|
            d_positions << [x, ysss[i]]
          end
          return d_positions
        end
      end
    end 

    positions
  end

end


#Test
#  a = Board.new
# p a.board
#  a_1 = Piece.new("hero")

#Test_cases
#  b, c, d = [0, 0], [0, 2], [0, 4]
#  a[b] = a_1
#  a.move_piece(b, c) #checking if 
#  a.move_piece(d, b) #checking raise for Null instance
# p a[c]
# p a[b]

# e = [0, 7]
# p a.valid_mv?(e) 

# Testing Populate w/modified display
# a = Board.new
# a.populate
# p a.find_king(:red) 
# p a.in_check?(:green) 
# p a.checkmate?(:green)

### Hypothetical plays vvv
# b, c = [1, 2], [2, 2]
# d, e = [7, 4], [2, 1]
# j, k = [1, 3], [2, 3]

# King(:red) in chk by Queen(:green)
# ALSO testing from this check_p.... move_p's updated code that 
#throws error for moves that will leave you in_check
# n, o = [0, 3], [3, 3]
# p, q = [7, 4], [5, 5]
# s = [4, 3] #good mv after o 
# s_2 = [4, 4] #pos rasies error as it leaves :K in-check

# a.move_piece_alt(n, o)#made2 avoid recursive call from Piece#v_move
# a.move_piece_alt(p, q)

# # a.move_piece(o, s)
# # p a[s].symbol

# b = []
# a.grid.each do |row| 
#   b << row.map { |piece| piece.symbol }
# end
# p b[0] #To view changes
# p b[1]
# p b[2]
# p b[3]
# p b[4]
# p b[5]
# p b[6]
# p b[7]
 
#Piece methods
# p a[o].valid_moves
# p a[o].move

#  p a.in_check?(:green)
 # kings moves from o [[3, 2], [2, 2], [2, 3], [2, 4], 
 # [3, 4], [4, 4], [4, 3], [4, 2]]

#  p a[o].non_check_type_mvs #not outputting filtered moves
#  p a[q].move #The red queen does have green king in check

# a[e].c_position = e
# p a[e].move #Proper output

#Testing Pawn first move && move method vvv
# l = [1, 4]
# p a[l].move

#Testing kill_r method
# g, h = [2, 3], [0, 3] 
# p a.kill_route(g, h)
# p a.find_all_poten_mvs(:red) WORKS

#Testing Piece module
# a = Board.new
# c = [3, 3]
# b = Queen.new(a, c, :red)
# p b.move

# COLORS vvv
#  [:black, :light_black, :red, :light_red, :green,:light_green,
#   :yellow, :light_yellow, 
#  :blue, :light_blue, :magenta, :light_magenta, :cyan, 
#  :light_cyan, :white, :light_white, :default]
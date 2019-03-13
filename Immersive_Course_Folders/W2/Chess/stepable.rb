module Stepable
  One = [[0, -1],[-1, -1], [-1, 0], [-1, +1], [0, +1], [+1, +1], [+1, 0], [+1, -1]]
  Two = [[0, -2], [-2, 0], [0, +2], [+2, 0]]

  def move_dir(type)
    coordinates = find_pos(type)
    coordinates.reduce([]) { |acc, pos| acc << pos }
  end

  private
  def find_pos(dir)
    positions = []

    if dir == "one" #This is for king
      One.each do |pos|
        x, y = c_position
        x1, y1 = pos
        poten = [(x + x1), (y + y1)] 
          if within_limits?(poten) && board[poten].color != self.color
            positions << poten
          end
      end
    else #This is for Knight
      Two.each do |pos|
        pos_2 = knight_pos_helper(pos) #This generates two coordi after the two steps aways from c_pos 

        pos_2.each do |coord| 
        x, y = c_position
        x1, y1 = coord
        poten = [(x + x1), (y + y1)]
          if within_limits?(poten) && board[poten].color != self.color
            positions << poten
          end
        end
        
      end

    end

    positions
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

  def knight_pos_helper(position)
    potential = []
    x, y = position

    x == 0 ? potential = [[-1, y], [+1, y]] : potential = [[x, -1], [x, +1]]
    potential
  end
end

#Test cases

# a = [-1, 7]
# p within_limits(a) WORKS 
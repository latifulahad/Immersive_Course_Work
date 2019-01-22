require "colorize"
require_relative "sudoku1"
require_relative "tile"

class Board

  def self.setup

  end

  def initialize(grid)
    @grid = grid 
  end

end

a = "sabit"
puts a.colorize(:cyan)

# a = File::readlines("sudoku1.txt").map(&:chomp)
# p a[0]

# 1 I need to read file and have an array of incomplete positions
# 2 I need a fac_# that will make an array with sudoku dimensions
# 2.1 that array's sub_A's elements will be tiles that will hold 
# values from the txt file......
# 3 we allow player to set up these tiles and the game will check 
#to see if the filled board matches the other file provided with solution
# like so filled_maped_arr == soltion_file.map(&:chomp)
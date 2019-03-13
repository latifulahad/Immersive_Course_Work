require_relative 'piece'
# require "singleton" INSTRUCTION REQUIRE THIS MODULE

class Null < Piece
attr_reader :symbol
# include Singleton

  def initialize
    @symbol = :N
    @color = :light_blue
  end

end

# a = Board.new
# b = [0, 0]
# a = Null.new
# p a.symbol
# p a.is_a?(Null)
# p a.color 





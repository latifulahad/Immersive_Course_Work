require_relative "card"

class Board
attr_reader :grid

  def initialize
    @grid = Array.new(3) { Array.new(3) {0} }
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @grid[x][y] = val
  end

  def populate
    cards = Card::CARDS.keys
    nominees = []
    3.times { nominees << Card.new(cards.sample) }
    b_pos = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    
     9.times do |i|
      if i < 3
        card_copy = []
        3.times { card_copy << nominees[0].dup }
        pos = b_pos.sample 
        self[pos] = card_copy.sample
        b_pos.delete(pos)
      elsif i < 6
        card_copy = []
        3.times { card_copy << nominees[1].dup }
        pos = b_pos.sample 
        self[pos] = card_copy.sample
        b_pos.delete(pos)
      else
        card_copy = []
        3.times { card_copy << nominees[2].dup }
        pos = b_pos.sample 
        self[pos] = card_copy.sample
        b_pos.delete(pos)
      end
     end 
  end 

  def won?
    @grid.flatten.all? { |card| card.f_status != "down" }
  end

  def reveal(pos)
    self[pos].c_value if self[pos].f_status == "down"
  end

end 

# p Card::CARDS.keys
# a = Board.new
# a.populate 
# pos = [0, 0]
# p a[pos].c_value
# p a.reveal([0,0])
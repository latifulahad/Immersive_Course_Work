# require_relative ""


class Hand
  attr_reader :hand
    
  def initialize(cards)
    @hand = cards
  end

  def show_cards#WORKS
    hand_arr = []
    hand.each { |cd| hand_arr << [cd.suit, cd.value] }
    p hand_arr
    sleep(5)
    system("clear") 
  end
end
require_relative "card"

class Deck
  attr_reader :cards

  Value = [:A, :K, :Q, :J, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  SUITS = [:H, :C, :D, :S]

  def self.make_deck #WORKS
    arr_of_cards = []
    SUITS.each do |suit|
      Value.each { |value| arr_of_cards << Card.new(suit, value) }
    end
    
    Deck.new(arr_of_cards)
  end

  def initialize(cards)
    @cards = cards
  end
end 

#Test 
# a = Deck.make_deck
# p a.cards.length #WORKS

  class Player
    attr_reader :name, :hand, :wallet, :stance

    State = ["check", "fold"]
    def initialize(name, hand)
      @name = name
      @hand, @wallet = hand, 50
      @stance = State[0]
    end

    def take_fr_wallet(amt)
      @wallet -= amt
    end

    def put_into_wallet(amt)
      @wallet += amt
    end

    def ask_plyr
      puts "Whats your stance #{name}, ex.(check, call, fold, or raise)?"
      response = gets.chomp
    end

    def wanna_swap(deck_of_cds)
      hand.show_cards
      puts "Type yes if interested or no if not."
      ans = gets.chomp
      if ans == "no" 
        return deck_of_cds 
      else
        hand.show_cards
      end
      
      puts " #{name} which cards would you like to replace ex.(indeces 0, 2, 5)? 3 is the MAX!"
      indeces = gets.chomp.split(",").map { |num| num.to_i }
      new_deck = do_swap(indeces, deck_of_cds)
      new_deck
    end

    private

    def do_swap(indeces, cards)
      @hand.hand.each_with_index do |card, i|
        if indeces.include?(i)
          cd = cards.sample
          cards.delete(cd)
          cards << card
          @hand.hand[i] = cd
        end
      end
      cards
    end
  end 

  #Tests
  # a = [:A, :K, :Q, :J, 10]
  # b = Player.new(a)
  # p b.stance
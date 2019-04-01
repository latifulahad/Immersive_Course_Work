# Player
# Each player has a hand, plus a pot
# Player has methods to ask the user:
#   Which cards they wish to discard
#   Whether they wish to fold, see, or raise.

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

    def ask_plyr
      puts "Whats your stance #{name}, ex.(check, call, fold, or raise)?"
      response = gets.chomp
    end
  end 

  #Tests
  # a = [:A, :K, :Q, :J, 10]
  # b = Player.new(a)
  # p b.stance
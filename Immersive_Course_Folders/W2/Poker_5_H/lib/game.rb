# Each player is dealt five cards.
# Players bet; each player may fold, see the current bet, or raise.
# In turn, each player can choose to discard up to three cards.
# They are dealt new cards from the deck to replace their old cards.
# Players bet again.
# If any players do not fold, then players reveal their hands; strongest hand wins the pot.

require_relative "deck"
require_relative "hand"
require_relative "player"

class Game
attr_reader :deck, :players, :c_player, :round, :pot, :rd_wager

  def initialize(deck)
    @deck = deck
    @players = []
    @c_player = 0 #Keeps track of whose turn it is
    @round = 1
    @pot = 0 #Float $
    @rd_wager = [0]
  end

  def add_player(name) #WORKS USE this within the live conditioning of the file
    cards = deal_5
    hand = Hand.new(cards)
    @players << Player.new(name, hand)
  end

  def winner?
    pot == 0
  end

  def play_round
    offer_swaps if round != 1 #sway upto 3 cards
    go_around_plyrs
  end

  def play
    @c_player = players[0]
    set_pot if round == 1   #THIS needs to be checked! 

    until winner?
      puts "This is round # #{round}"
      finishing_p = players.size
      play_round
      return evaluate_winner if finishing_p == players.size #Gud_logic
      #SET WINNING PLYRS WALLET
      @rd_wager = [0] #Pot already has $ from past rds, this var will hdl rd bids
      @round += 1
    end

  end


  # private
  def go_around_plyrs
    run = false
    
    until run
      run = true #making this true will end loop
      loop_n, help_var, dropped_plyrs = players.length, [], []
      
      loop_n.times do |i| 
        if rd_wager.size > 1 && i == players.index(c_player) #purpose is to stop ask plyr that raised
          break #THIS SETUP WORKS
        end
        puts "Wager so far #{rd_wager.last}"
        sleep(3)
      puts "#{players[i].name} below are your cards"
      players[i].hand.show_cards 
      res = players[i].ask_plyr
      help_var = handle_res(res, players[i])
        if help_var[0] == true
          run = false
        end
        help_var[1..-1].each { |pl| dropped_plyrs << pl }
      end

      drop_plyrs(dropped_plyrs)
    end
    
  end

  def handle_res(response, player)
    go_around = [false]

    case response
    when "fold"
      go_around << player
    when "call"
      take_fr_plyr(player, rd_wager.last)
      puts "Your wallet looks like this #{player.wallet}"
    when "raise" #review pot_updating logic
      @c_player, go_around[0] = player, true
      puts "How much would you like to raise by?"
      wager = gets.chomp.to_i
      take_fr_plyr(player, wager)
      @rd_wager << wager
      all_plyrs = players.map { |plyr| plyr.name }
      puts "Following player/s #{all_plyrs.join(" ")}, to stay in you need to 'call' #{wager}" 
    end

    go_around
  end

  def evaluate_winner
    hands = [] #will hold plyr && their hand evaluation
    players.each { |plyr| hands << [plyr.name, eval(plyr.hand)] } #eval wil lable hand_strength
    new_hands = hands.sort_by { |participant| participant[1] }
    amt, winner = pot, 0
    @pot = 0
    players.each { |pl| winner = pl if pl.name == new_hands[0][0] }
    puts "#{winner.name} Congratulations, you won #{winner.wallet} & wiped every1 OUT!!!"
  end
  
  # def eval(hand)
  #   HAND_T = {
  #   1 "straight_flush"=>[suit && value_in_order], 
  #   2 "four_of_kind"=>[value], 
  #   3 "full_house"=>[3val_same && pair], 
  #   4 "Flush"=>[suit_same], 
  #   5 "Straight"=>[value_in_order], 
  #   6 "Three of a kind"=>[3val_same], 
  #   7 "2 Pairs"=>[pair], 
  #   8 "pair"=>[pair], 
  #   9 "H_card"=>[value = :A]
  #   }

  #   ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  #   n_hand = hand.map { |c| [c.suit, c.value] } #5 cards like so [:H, 10]
  #   hand_vals = hand.map { |c| c.value } #[10, :K, :J, 2, :A]

  #   case n_hand
  #   when n_hand.all? { |c| c[0] == hand[0].suit  } && hand_in_odr?(hand_vals) 
  #   end 
  # end

  def hand_in_odr?(vals) 
    return false if vals[0] == vals[-1]

    criteria = [:A, :K, :Q, :J, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    criteria_b = [:K, :Q, :J, 10, 9, 8, 7, 6, 5, 4, 3, 2, :A]
    starting_p = vals[0]
    #WE ARE HERE....WORKING ON HELPING #eval(hnd) w/dis methd
    vals.each_with_index do |v, i|
    end
  end
  
  def deal_5  #WORKS
    cards = []
    5.times do 
      card = deck.sample
      cards << card
      deck.delete(card)
    end 

    cards
  end

  def set_pot #WORKS 
    if round == 1
      players.each { |plyr| take_fr_plyr(plyr, 10) }
    end
  end

  def take_fr_plyr(plyr, amt) #WORKS
    if plyr.wallet >= amt 
      plyr.take_fr_wallet(amt)
      @pot += amt
    else
      puts "#{plyr.name} your wallet is low on cash"
      players.delete(plyr)
    end
  end

  def drop_plyrs(arr)#WORKS
    arr.each do |p|
      puts "#{p.name} is OUT!"
      @players.delete(p)
    end
  end

end

#Tests 
# b = Deck.make_deck
# c = b.cards
# a = Game.new(c)

# name = "Sabit"
# name_2 = "Sanam"
# name_3 = "Suravi"
# name_4 = "Amar"
# a.add_player(name)
# a.add_player(name_2)
# a.add_player(name_3)
# a.add_player(name_4)
# a.players[0].take_fr_wallet(10) 
# p a.players[0].wallet

# a.set_pot
# p a.pot

if __FILE__ == $PROGRAM_NAME  
  b = Deck.make_deck
  c = b.cards
  a = Game.new(c)

  name = "Sabit"
  name_2 = "Sanam"
  name_3 = "Suravi"
  name_4 = "Amar"
  a.add_player(name)
  a.add_player(name_2)
  a.add_player(name_3)
  a.add_player(name_4)
  a.play
end

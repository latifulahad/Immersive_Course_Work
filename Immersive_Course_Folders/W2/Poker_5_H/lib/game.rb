require_relative "deck"
require_relative "hand"
require_relative "player"

class Game
attr_reader :deck, :players, :c_player, :round, :pot, :rd_wager

  def initialize(deck)
    @deck, @players, @c_player = deck, [], 0 
    @round, @pot = 1, 0
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
      @rd_wager = [0] #Pot already has $ from past rds, this var will hdl rd bids
      @round += 1
    end

  end

  private
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

  def handle_res(response, player)#WORKS 
    go_around = [false]

    case response
    when "fold"
      go_around << player
    when "call"
      take_fr_plyr(player, rd_wager.last)
      puts "Your wallet looks like this #{player.wallet}"
    when "raise" 
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

  def evaluate_winner #WORKS - logic to check plyrs w/same eval(hand) nums
    hands = []
    players.each { |plyr| hands << [plyr.name, eval(plyr.hand.hand)] } #eval wil label hand_strength
    amt, winner = pot, 0
    
    new_hands = hands.sort_by { |participant| participant[1] }
    players.each { |pl| winner = pl if pl.name == new_hands[0][0] }
    winner.put_into_wallet(amt)
    @pot = 0
    puts "Yay #{winner.name} you've won $#{amt} and beat everyone!!!"
  end

  def eval(hand) #WORKS
    n_hand = hand.map { |c| [c.suit, c.value] } #5 cards like so [:H, 10]
    hand_vals = hand.map { |c| c.value } #[10, :K, :J, 2, :A]

    case n_hand
    when n_hand.all? { |c| c[0] == hand[0].suit } && hand_in_odr?(hand_vals)
      return 1
    when how_my_sme_cds(hand_vals).include?(4)
      return 2
    when how_my_sme_cds(hand_vals).include?(3) && how_my_sme_cds(hand_vals).include?(2) 
      return 3
    when n_hand.all? { |c| c[0] == hand[0].suit }
      return 4
    when hand_in_odr?(hand_vals)
      return 5
    when how_my_sme_cds(hand_vals).include?(3)
      return 6
    when how_my_sme_cds(hand_vals).count(2) == 2
      return 7
    when how_my_sme_cds(hand_vals).include?(2)
      return 8
    when hand_vals.include?(:A)
      return 9
    end
  end

  def how_my_sme_cds(hand) #WORKS
    hash = {}
    hand.each do |val| 
      num = hand.count(val)
      hash[val] = num
    end
    hash.values 
  end

  def hand_in_odr?(vals) #WORKS decifers card_val sequence
    return false if vals[0] == vals[-1]

    criteria, arr_a = [:A, :K, :Q, :J, 10, 9, 8, 7, 6, 5, 4, 3, 2], []
    criteria_b, arr_b = [:K, :Q, :J, 10, 9, 8, 7, 6, 5, 4, 3, 2, :A], []

    idx_2_scan, idx_2_scan_2 = make_route(vals, criteria), make_route(vals, criteria_b)

    idx_2_scan.each { |pos| arr_a << criteria[pos] }
    idx_2_scan_2.each { |pos| arr_b << criteria_b[pos] }

    return true if vals == arr_a
    return true if vals == arr_b
    false
  end
  
  def make_route(v_arr, odr_arr) #WORKS Helps hand_in_odr
    route = [odr_arr.index(v_arr[0])]
    
    4.times do
      (route.last + 1) > odr_arr.length - 1 ? route << 0 : route << route.last + 1
    end

    route
  end

  def offer_swaps
    refreshed_cards = 0
    players.each do |plyr| 
      refreshed_cards = plyr.wanna_swap(deck)
      puts "Your new hand looks like this:"
      plyr.hand.show_cards
      @deck = refreshed_cards
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

require "set"
require_relative "human_p"

class Ghost
attr_accessor :fragment, :current_p, :loses 
attr_reader :player_one, :player_two, :dictionary

ALPHABET = ("a".."z").to_a

  def initialize(player_one, player_two, dictionary)
    @player_one = player_one
    @player_two = player_two
    @dictionary = dictionary 
    @fragment = ""
    @current_p = @player_one
    @loses = { @player_one=>@player_one.strike_letters.length, @player_two=>@player_two.strike_letters.length }
  end

  def next_p
    if @current_p == @player_one 
      @current_p = @player_two
    else
      @current_p = @player_one
    end  
  end 

  def previous_p
    if current_p == player_one
      player_two
    else
      player_one
    end
  end 

  def valid_play?(guess)
    
    if ALPHABET.include?(guess.downcase)
      fragment << guess
      potential_w = Set.new([fragment])
      potential_w.subset?(dictionary)
    else 
      return false
    end 

  end 

  def take_turn
    guess = current_p.get_guess

    if valid_play?(guess)
      n_player = previous_p
      n_player.strike
      @fragment = ""
      p "#{current_p.name} you have won this round YAY!!!" 
    else
      puts "#{guess} does not form a word within the dictionary :("
    end
    
  end

  def play_round
    take_turn
    p fragment
    next_p 
  end 

  def play
    until loses.values.include?(5)
      play_round
    end 
  end
  
end

# player = HumanPlayer.new("sabit")
# a = { player=>player.strike_letters.length } 
# p a.values 

if __FILE__ == $PROGRAM_NAME
 dictionary = File::readlines("dictionary.txt").map(&:chomp)
 dictionary_a = Set.new(dictionary)
  player_one = HumanPlayer.new("Sabit")
  player_two = HumanPlayer.new("Suravi")
  game = Ghost.new(player_one, player_two, dictionary_a)
  game.play
end 

# https://www.google.com/url?q=https://dev.to/dnamsons/ruby-debugging-in-vscode-3bkj&sa=D&source=hangouts&ust=1547071943854000&usg=AFQjCNHQY_yGvpNxsv39CsTKI9L1udYnOg
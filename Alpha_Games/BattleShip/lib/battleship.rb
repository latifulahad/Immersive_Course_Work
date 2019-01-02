require_relative "player"
require_relative "board"

class BattleshipGame
  attr_reader :board, :player

  def initialize(player, board)
    @player = player
    @board = board
  end

  def in_range?(pos)
    x, y = pos
    raise "Out of bounds" if x > 9
    raise "Out of bounds" if y > 9
    true
  end
  
  def attack(pos)
    in_range?(pos)

    if board[pos] == :s
      @board[pos] = :x
      puts "Good Job Sailor, #{@board.count} more to go !!!" 
    end
  end

  def count 
    @board.count
  end

  def game_over?
    @board.won?
  end

  def play_turn
    pos = @player.get_play
    attack(pos)
  end 

  def play 
    @board.display

    until @board.won?
      begin
        @player.prompt
        play_turn
      rescue
        "Try numbers between 0-9 friend for both row and col."
        retry
      end
        @board.display
    end

    puts "#{@player.name} you got them all, hooray!"
  end 

end

if __FILE__ == $PROGRAM_NAME
  puts "Type your name please:"
  name = gets.chomp
  player = HumanPlayer.new(name)
  board = Board.new 
  board.place_random_ship
  game = BattleshipGame.new(player, board)
  game.play
end 
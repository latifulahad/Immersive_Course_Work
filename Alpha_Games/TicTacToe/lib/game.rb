require_relative 'board'
require_relative 'human_player'
require_relative 'computer_player'

class Game
attr_accessor :board, :current_player, :player_1, :player_2 
  
  def initialize(player_1, player_2)
    @player_1 = player_1
    @player_2 = player_2
    player_1.mark = :X
    player_2.mark = :O
    @current_player = player_1
    @board = Board.new 
  end 

  def play_turn
    @board.place_mark(current_player.get_move, current_player.mark)
    player_1.display(board)
    switch_players! 
  end 

  def switch_players!
   current_player == @player_1 ? @current_player = @player_2 : @current_player = @player_1  
  end 

  def play 
    player_1.display(board) 
    player_2.display(board)

    until board.over? 
      play_turn
    end 

    if board.winner == :X 
      puts "Yay #{player_1.name} you are better then computer logic :)"
    elsif board.winner == :O 
      puts "Darn that computer algorythm is too cool lol"
    else 
      puts "Its a Draw folks :)"
    end 
  end 

end

if __FILE__ == $PROGRAM_NAME 
  player_1 = HumanPlayer.new("Sabit")
  player_2 = ComputerPlayer.new("Siri") 
  ticTac = Game.new(player_1, player_2)
  ticTac.play
end 

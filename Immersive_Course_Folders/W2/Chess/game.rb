require_relative "board"
require_relative "display"
require_relative "player"

class Chess
attr_reader :board, :display, :players, :c_player

  def initialize(board, display, players)
    @board, @display = board, display
    @players = players
    @c_player = players[0]
  end

  def notify_player 
    o_player = other_player
    if board.in_check?(o_player.color)  
      p "hey #{o_player.name} you are in trouble "
    end
  end

  def switch_player
    @c_player == players[0] ? @c_player = players[1] : @c_player = players[0]
  end
  
  def segment_1_takeT
    pos_selected = c_player.make_move

     if !board[pos_selected].is_a?(Null)
      [pos_selected, board[pos_selected].valid_moves]
     else
      raise("Pos selected is not a piece!")
     end
  end

  def take_turn
    begin
      coordinate = segment_1_takeT
      p coordinate[1] #p poten_mvs
      choice = gets.chomp.to_i
      to_location = coordinate[1][choice]
      board.move_piece(coordinate[0], to_location)
      notify_player
      switch_player
    rescue
      retry
    end
  end

  #Prob = After second player makes move..board is no longer 
  #shown..nor is current play info shown....
  def play
    
    until over?
      display.render
      p "#{c_player.name} please make you move"
      take_turn
    end

    p " Yay #{c_player.name} you've beat #{o_player.name} "
  end


  private

  def over? 
    colors = [:red, :green]
    colors.any? { |color| board.checkmate?(color) }
  end

  def other_player
    c_player == players[1] ? players[2] : players[1]
  end
end



if __FILE__ == $PROGRAM_NAME
  board = Board.new
  board.populate
  display = Display.new(board)
  p "Please type your name Player 1"
  p_1 = gets.chomp
  p "Player 2 please type your name"
  p_2 = gets.chomp
  player_1 = Player.new(p_1, display, :green)
  player_2 = Player.new(p_2, display, :red)
  players = [player_1, player_2]
  game = Chess.new(board, display, players)
  game.play
end

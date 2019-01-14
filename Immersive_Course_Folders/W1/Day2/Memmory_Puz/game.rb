require_relative "board"
require_relative "player"
# require_relative "card"

class Game
attr_reader :board
  def initialize(board, player)
    @board = board
    @player = player
    @prev_guess = [] 
  end

  def render
    p "columns 0-2"
    p "row 0 #{display_manag(@board.grid[0])}"
    p "row 1 #{display_manag(@board.grid[1])}"
    p "row 2 #{display_manag(@board.grid[2])}"
  end

  def play_round
    guesses = []
    3.times { guesses << @player.get_guess }
    tester = guesses.sample 

    if guesses.all? { |guess| @board[guess].c_value == @board[tester].c_value } #== true
      guesses.each { |pos| @board[pos].f_status = @board[pos].c_value } && @board[tester].f_status = @board[tester].c_value
      render
    else
      a, b, c = guesses
      p a
      p b
      p c
      p "1st = #{@board[a].c_value} 2nd = #{@board[b].c_value} 3rd = #{@board[c].c_value} "
      sleep(5)
    end

    system("clear")
  end


  def play

    until @board.won?
      render
      play_round
    end

    p "Great job #{@player.name}, hope you had fun :)"
  end


  private
  def display_manag(arr)
    a = []
    arr.each { |ele| a << ele.f_status }
    a.join(" ")
  end

end 

if __FILE__ == $PROGRAM_NAME
  a = Board.new
  a.populate
  puts "Hi there, please write your name:"
  name = gets.chomp
  player = HumanPlayer.new(name)
  b = Game.new(a, player)
  b.play 
end

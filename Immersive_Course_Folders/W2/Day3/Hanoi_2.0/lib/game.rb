class Hanoi
attr_accessor :player, :board

  def initialize(player)
    @player = player
    @board = [[1, 2, 3],[],[]]
  end

  def move(from, to)
    a = @board[from].shift
    @board[to].unshift(a)
  end

  def valid_mv?(from, to)
    return true if !board[from].empty? && board[to].empty?
    return false if board[from].empty? 
    return false if board[to][0] < board[from][0]
    true
  end

  def handle_res(move)
    from, to = move
    if valid_mv?(from, to)
      move(from, to)
    else
      raise ArgumentError.new("Wrong positions, please try again")
    end
  end

  def won?
    return true if board[1].length == 3 || board[2].length == 3
    false
  end

  def play
    puts "Welcome #{player.name}, lets play some TowersOfHanoi :)"
    p "board = #{board}"

    until won?
      begin
        mv = @player.get_mv
        handle_res(mv)
        p board
      rescue ArgumentError => e
        puts e.message
        retry
      end
    end

    puts "Yay #{player.name} you've dont it!!!"
  end

end

class Player
  attr_reader :name

  def initialize(name)
    @name = name 
  end

  def get_mv
    puts "Please select your towers ex. 0, 1"
    raw_pos = gets.chomp.split(",")
    raw_pos.map { |n| n.to_i }
  end
end

#Test
# a = Hanoi.new("Sabit")
# p a.valid_mv?(1, 2) 
# mv = [2, 1]
# a.handle_res(mv)

#Player
# c = Player.new("Sabit")
#   d = c.get_mv
#   p d

# if __FILE__ == $PROGRAM_NAME
#   puts "Please provide you name"
#   name = gets.chomp
#   player = Player.new(name)
#   game = Hanoi.new(player)
#   game.play   
# end




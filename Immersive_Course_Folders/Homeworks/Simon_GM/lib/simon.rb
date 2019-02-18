class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(name)
    @name = name
    @sequence_length, @game_over, @seq = 1, false, []
  end

  def play

    until @game_over == true
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    if @game_over == false
      show_sequence
      require_sequence
      round_success_message if @game_over == false
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    p seq
    sleep(3)
    system("clear")
  end

  def require_sequence
    if @sequence_length == 1
      guess = gets.chomp
      @game_over = true if !@seq.include?(guess)
    else
      guess = gets.chomp.split
      @game_over = true if guess.length != @sequence_length

      guess.each_with_index do |wd, i|
        @game_over = true if seq[i] != wd
      end
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Good job #{@name}, your memory is sharp!"
  end

  def game_over_message
    puts "It's ok #{@name}, we all lose a round or two. Try harder next time :)"
  end

  def reset_game
    @sequence_length, @game_over, @seq = 1, false, []
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Please enter you name:"
  name = gets.chomp
  a = Simon.new(name)
  a.play
end

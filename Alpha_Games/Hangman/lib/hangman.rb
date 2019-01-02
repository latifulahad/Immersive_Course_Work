class Hangman
  attr_reader :dictionary, :word, :wrong_letters
  attr_accessor :board

  def initialize(dictionary, name)
    @dictionary = dictionary
    @name = name 
    @word = ""
    @board = []
    @wrong_letters = []
    # @turn = 9
  end

  def select_wd
    @word << dictionary.sample
  end
  
  def setup_board
    word.length.times { @board << nil }  
  end 
  
  def adjust_board(guess)
   @wrong_letters << guess if !@word.include?(guess) 

    arr = []
    @word.chars.each_with_index { |el, i| arr << i if el == guess } 

    @board.each_index do |i| 
      if arr.include?(i) 
        @board[i] = guess 
      end
    end

    board
  end

  def play 
    select_wd
    setup_board

    i = 10
    while i > 0 do
      puts "Choose a letter: "
      guess = gets.chomp
       if @word.include?(guess)
        i += 1
       end
      adjust_board(guess)
      puts "#{board}"
      puts "Wrong guesses: #{wrong_letters}" 
      puts "#{i - 1} turns remaining." unless i == 1
      puts "#{@name} you live to see another day." if @board == word.chars
    
      i -= 1
    end

    puts "R.I.P! Loser #{@name}, the word was #{word.upcase}."
  end 
end

if __FILE__ == $PROGRAM_NAME
  dictionary = File::readlines("dictionary.txt").map(&:chomp)
  puts "Write is your name: "
  name = gets.chomp
  game = Hangman.new(dictionary, name)
  game.play
end





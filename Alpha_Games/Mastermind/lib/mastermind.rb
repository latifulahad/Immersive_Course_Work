class Code
  PEGS = { 
    "r"=>:red, 
    "b"=>:blue, 
    "g"=>:green, 
    "y"=>:yellow, 
    "o"=>:orange, 
    "p"=>:purple 
  }

  def self.parse(str)
  p_code = str.downcase.chars 
  gud_c = []

    p_code.each do |el|
      if PEGS.has_key?(el)
        gud_c << el 
      else 
        raise "Wrong color present"
      end 
    end

    Code.new(gud_c) 
  end

  def self.random
    keys = PEGS.keys 
    r_code = []
    4.times { r_code << keys.sample }
    Code.new(r_code) 
  end 

  attr_reader :pegs 
  def initialize(pegs)
    @pegs = pegs 
  end 

  def [](i)
    pegs[i] 
  end 

  def exact_matches(o_code) 
    count = 0
    self.pegs.each_with_index do |ele, i|
      if ele == o_code[i]  
        count += 1
      end 
    end 
    count 
  end 

  def near_matches(o_code)
    count = 0
    a = self.pegs.uniq 
    b = o_code.pegs.uniq 
    a.each { |ele| count += 1 if b.include?(ele) }
    count - self.exact_matches(o_code)
  end 
  
  def ==(other)
    return false unless other.is_a?(Code) 
    self.pegs == other.pegs 
  end 

end

class Game
  attr_reader :secret_code

  def initialize(secret_code = Code.random)
    @secret_code = secret_code 
  end 

  def get_guess
    puts "Select 4 colors btw r, b, g, y, o ,p as such (rgbp)"
    begin
      Code.parse(gets.chomp)
    rescue 
      puts "Wrong color present! Try Again."
      retry 
    end 
  end 

  def display_matches(guess) 
    e_match = secret_code.exact_matches(guess)
    n_match = secret_code.near_matches(guess)
    puts "You have #{e_match} exact matches" 
    puts "And #{n_match} near matches."
  end 

  def play 
    10.times do  
      guess = get_guess
      display_matches(guess)
      if self == guess  
        puts "Damn you are good!"
        return 
      end  
    end 

    puts "Better luck next time bud."
  end 

end


if __FILE__ == $PROGRAM_NAME
 game = Game.new
 game.play 
end 
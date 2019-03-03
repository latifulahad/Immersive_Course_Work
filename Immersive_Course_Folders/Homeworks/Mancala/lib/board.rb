class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    cups = Array.new(14) { Array.new(4, :stone) } 
    cups[6], cups[13] = [], []
    @cups = cups
  end

  def valid_move?(start_pos)
    raise StandardError.new("Starting cup is empty") if cups[start_pos] == []
    raise StandardError.new("Invalid starting cup") if start_pos > 14
    true 
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []

    needed_idx = start_pos
    until stones.empty?
      needed_idx += 1
      needed_idx = 0 if needed_idx > 13
      
      if needed_idx == 13
        @cups[needed_idx] << stones.pop if current_player_name == @name2
      elsif needed_idx == 6 
        @cups[needed_idx] << stones.pop if current_player_name == @name1
      else
        @cups[needed_idx] << stones.pop
      end
    end

    render
    next_turn(needed_idx)
  end

  def next_turn(ending_cup_idx) #I added 2ndPara
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 13 || ending_cup_idx == 6 
      :prompt 
    elsif @cups[ending_cup_idx].length == 1 #This num has to be 1 because you ended ur turn here aka final stone dropped here.
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    cups[1..6].all? { |cup| cup.length == 0 } || 
    cups[7..12].all? { |cup| cup.length == 0 }
  end

  def winner
     if cups[6].length == cups[13].length
      :draw
     else 
      cups[6].length > cups[13].length ? @name1 : @name2
     end
  end

end

# a = Board.new("Sabit", "Suravi")
# p a.cups 
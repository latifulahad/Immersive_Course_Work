class Board
  attr_accessor :grid

  def self.default_grid 
    a = Array.new(10) { Array.new(10) }
    Board.new(a) 
    a 
  end 
  
  def initialize(grid = Board.default_grid)
    @grid = grid
  end 

  def [](pos)
    x, y = pos
    grid[x][y]
  end

  def []=(pos, mark)
    x, y = pos
    @grid[x][y] = mark
  end 

  def count
    count = 0
    grid.each { |sub| count += sub.count(:s) }
    count 
  end

  def empty?(pos = nil)
    if pos
      self[pos] == nil
    else
      count == 0
    end
  end

  def full?
    a = grid.flatten
    a.each { |ele| return false if ele.nil? }
    true 
  end 

  def place_random_ship
    if full?
      raise "Board is full!"
    else
      10.times do
        pos = random_pos
        self[pos] = :s unless self[pos] == :s
      end
    end 

  end 

  def random_pos
    [rand(10), rand(10)]
  end 

  def won?
   count == 0 
  end 

  def display
    new_b = []
    grid.each do |sub|
      new_b << sub.map do |el|
        if el == :x 
          el 
        else
          el = nil
        end 
      end
    end
    puts "col: 0-9"
    puts "0: #{new_b[0]} "
    puts "1: #{new_b[1]} "
    puts "2: #{new_b[2]} "
    puts "3: #{new_b[3]} " 
    puts "4: #{new_b[4]} "
    puts "5: #{new_b[5]} "
    puts "6: #{new_b[6]} "
    puts "7: #{new_b[7]} "
    puts "8: #{new_b[8]} "
    puts "9: #{new_b[9]} "
  end

end

class Board
  attr_reader :grid 

  def initialize(grid = Array.new(3) { Array.new(3) })
    @grid = grid
    @mark = [:X, :O] 
  end  

  def [](pos)
    x, y = pos 
    @grid[x][y]
  end 

  def place_mark(pos, mark) 
    x, y = pos 
    @grid[x][y] = mark 
  end 

  def empty?(pos)
    x, y = pos
    grid[x][y].nil? 
  end 

  def winner
    grid.each do |subArr| 
      return :X if subArr == [:X, :X, :X]
      return :O if subArr == [:O, :O, :O]
    end 
    grid_b = grid.transpose
    grid_b.each do |sub|
      return :X if sub == [:X, :X, :X]
      return :O if sub == [:O, :O, :O]  
    end 
    return :X if [grid[0][0], grid[1][1], grid[2][2]] == [:X, :X, :X]
    return :X if [grid[0][2], grid[1][1], grid[2][0]] == [:X, :X, :X]
    return :O if [grid[0][0], grid[1][1], grid[2][2]] == [:O, :O, :O]
    return :O if [grid[0][2], grid[1][1], grid[2][0]] == [:O, :O, :O]
    nil 
  end 

  def over?
    return true if self.winner == :X || self.winner == :O   
    grid.each { |sub| return false if sub.include?(nil) }
  end 

end

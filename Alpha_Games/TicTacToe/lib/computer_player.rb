require_relative 'board'

class ComputerPlayer
  attr_reader :board 
  attr_accessor :mark 

  def initialize(name)
    @name = name
    @board = board 
  end 

  def display(board)
    @board = board 
  end 

  def get_move 
    empty_pos = []

    board.grid.each_with_index do |sub, i|
      sub.each_index do |i2|
        empty_pos << [i, i2] if board.empty?([i, i2]) 
      end 
    end

    empty_pos.each do |pos|
      return pos if winning_mv?(pos)
    end 
     
    draw_pos 

    empty_pos.sample
  end 

  private

  def winning_mv?(pos)
    @board.grid[pos[0]][pos[1]] = :O
    if @board.winner == :O 
      @board.grid[pos[0]][pos[1]] = nil
      return true 
    else
      @board.grid[pos[0]][pos[1]] = nil 
      return false 
    end 
  end

  def draw_pos
    @board.grid.each_with_index do |sub, i|
       if sub.count(:X) == 2 && sub.count(nil) == 1
        i2 = sub.index(nil) 
        return [i, i2] 
       end 
    end
    board_c = board.grid.transpose 
    # the code below is tricky... simply due to attaining idxs' for subA && it's contents
    board_c.each_with_index do |sub, i2|
      if sub.count(:X) == 2 && sub.count(nil) == 1
        i = sub.index(nil) 
        return [i, i2] 
      end 
    end 

  end 
end

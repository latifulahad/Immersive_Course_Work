module Slideable

  def move_dir(direction)
    dirs = { "diagonal"=>diagonal_pos, "horizontal"=>horizontal_pos, "vertical"=>vertical_pos }
    moves = []

    direction.each do |dir| #This loop will check direction arr's elements which are directions the given piece can travel
      positions = dirs[dir] #Possible coordinates for the given dir thats found in the direction argument
      positions.each { |pos| moves << pos } #This step is to simplify reading of generated pos  
    end

    moves
  end
  

  private
  def diagonal_pos
    coordinates = []
    direction = [[-1, -1], [-1, +1], [+1, -1], [+1, +1]]

    direction.each do |dir|
      positions = find_positions(dir) 
      positions.each { |p| coordinates << p }
    end
    
    coordinates
  end

  def horizontal_pos
    coordinates = []
    direction = [[0, -1], [0, +1]]

    direction.each do |dir|
      positions = find_positions(dir) 
      positions.each { |p| coordinates << p }
    end

    coordinates
  end

  def vertical_pos
    coordinates = []
    direction = [[-1, 0], [+1, 0]]

    direction.each do |dir|
      positions = find_positions(dir) 
      positions.each { |p| coordinates << p }
    end
    
    coordinates 
  end

  def find_positions(dir) #Will yield nil pos in given direction
    positions = [c_position]
    run = true

    until run == false
      x, y = dir
      x1, y1 = positions.last
      poten = [(x + x1), (y + y1)]

      if within_limits?(poten) && board[poten].color != self.color
        positions << poten
      else
        run = false
      end
    end

    positions.length > 1 ? positions[1..-1] : []
  end

  def within_limits?(pos) #This will assist find_positions
    x, y = pos
    if !x.between?(0, 7)
      return false
    elsif !y.between?(0, 7)
      return false
    end
    true
  end

end
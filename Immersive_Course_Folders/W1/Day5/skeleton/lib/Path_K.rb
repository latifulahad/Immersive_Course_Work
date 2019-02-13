require_relative "00_tree_node"

class KnightsPathFinder
attr_reader :root_pos
attr_accessor :considered_pos

  def initialize(start_pos)
    @root_pos = PolyTreeNode.new(start_pos) #specify starting pos 
    @considered_pos = [@root_pos.value]
    build_move_tree
  end

  def find_path(end_point)
    #c_pos.BFS(end_point) => path btw c_pos&end_p
    #wanted output = c_pos relationship ties to end_p
    end_node = @root_pos.bfs(end_point)
    path = route_nodes(end_node)
  end

  def build_move_tree
    #1 Takes start pos
    #2 A = Every possible route from start
    #3 Repeats process for elements of A
    #4 All the way to the other end of the grid
    #5 While generating pos, from_pos TO output_pos we needs to 
    #link each pos(aka node) with PolyTreeNode #method .parent = _____
    node_tree = [root_pos]

    until node_tree.empty?
      focus_node = node_tree.shift

      current_pos = focus_node.value
      new_moves = new_move_positions(current_pos)#NewPosGeneratedHere

      new_moves.each do |new_mv|
        new_node = PolyTreeNode.new(new_mv)
        new_node.parent = focus_node
        node_tree << new_node
      end
    end
# ---------------------------------
#     self.root_node = PolyTreeNode.new(start_pos)  #Answer key

#     # build the tree out in breadth-first fashion
#     nodes = [root_node]
#     until nodes.empty?
#       current_node = nodes.shift

#       current_pos = current_node.value
#       new_move_positions(current_pos).each do |next_pos|
#         next_node = PolyTreeNode.new(next_pos)
#         current_node.add_child(next_node)
#         nodes << next_node
#       end
#     end
  end
  
  def new_move_positions(pos) #[potential_pos - considered_pos]
    moves = valid_moves(pos)
    potential_m = moves.reject { |mv| considered_pos.include?(mv) }
    potential_m.each { |mv| considered_pos << mv }
    potential_m
  end

  def valid_moves(pos) # => [8_potential_positions]
    x, y = pos
    c_pos = [x, y]
    moves = genearate_positions(c_pos)
    moves
  end

  private

  def mock_board #Every possible pos in an 8X8 grid
    board = []

    (0..8).to_a.each_with_index do |row, i|
      9.times { |i2| board << [i, i2] }
    end

    board 
  end

  def genearate_positions(c_pos) #Possible grid points the knight can travel to given current pos
    potential_pos = []
    board = mock_board
    move_cal = [[-2, -1], [-2, 1], [-1, -2], [1, -2], [2, -1], [2, 1], [-1, 2], [1, -2]]
    x, y = c_pos

    move_cal.each do |pos|
      x1, y1 = pos
      x2 = x + x1
      y2 = y + y1
      potential_pos << [x2, y2] if x2.between?(0, 8) && y2.between?(0, 8)
    end

    potential_pos
  end

  def route_nodes(final_node)
    route = []

    run_condition = final_node
    until run_condition.nil?
      route.unshift(run_condition.value)
      run_condition = run_condition.parent
    end

    route 
  end
end

#Test 
#knight_root_positions' = [[0, 1], [0, 7], [8, 1], [8, 7]]
start = [0, 1]
a = KnightsPathFinder.new(start)
# finish = [8, 1] 

# p a.find_path(finish) #WORKS

#  position = [6, 6]
#  p a.valid_moves(position) #WORKS

# p a.genearate_positions(start) #WORKS




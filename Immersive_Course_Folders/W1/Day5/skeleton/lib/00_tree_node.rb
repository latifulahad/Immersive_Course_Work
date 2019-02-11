class PolyTreeNode

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(node)
  
    if @parent.nil?
      @parent = node 
      node.add_child(self)
    else 
      @parent.remove_child(self)
      @parent = node
      @parent.add_child(self) unless self.parent == nil 
    end

  end

  def parent
    @parent
  end

  def children
    @children
  end

  def value
    @value
  end 

  def dfs(value = nil, &prc)
    prc ||= Proc.new { |node| node.value == value }
    return self if proc.call(self)

    @children.each do |child|
      result = child.dfs(&prc)
      return result unless result.nil?
    end

    nil
  end

  def bfs(target = nil, &prc)
    #This method will check node's value first D
    #Then it will retieve its parent's data on children D
    #It will look at sibling values D
    #Then it will look at self's kids values and self's siblings kids
    #It will repeat this until the given node has no children D 

    # return self if @value == target 

    # first_tier = @parent.children
    # first_tier.each { |node| return node if node.value == target }

    # until @value == target
    #   self.children.each { |node| return node if node.value == target } 
    #   first_tier.each do |siblings|
    #     siblings.children.each { |node| return node if node.value == target } 
    #   end
    # end

    raise "Need a proc or target" if [target, prc].none?
    prc ||= Proc.new { |node| node.value == target }

    nodes = [self]
    until nodes.empty?
      node = nodes.shift

      return node if prc.call(node)
      nodes.concat(node.children)
    end

    nil
  end
  
  protected
  def add_child(node)
    @children << node
  end

  def remove_child(node)
   if @children.include?(node)  
      @children.delete(node)  
   else
      puts "#{node} is not #{self}'s kid"
   end
  end

end

# Tests
a = PolyTreeNode.new(10)
b = PolyTreeNode.new(20)
c = PolyTreeNode.new(30)
d = PolyTreeNode.new(40)
e = PolyTreeNode.new(50)
f = PolyTreeNode.new(60)

# Assigning parent Test WORKS!
#  a.parent = b
#  puts b.children.last.value

# Reassigning parent Test WORKS!
# a.parent = c
# p c.children.last.value
# p a.parent.value

# Protected concept check(encapsulation) WORKS
# a.add_child(b)

#Dfs method test
b.parent = a
c.parent = b
d.parent = c
e.parent = d
f.parent = e

# Random test 
# puts a.children.last.value WORKS
# puts a.dfs { |node| node.value == 60 } WORKS
# puts a.bfs(50)
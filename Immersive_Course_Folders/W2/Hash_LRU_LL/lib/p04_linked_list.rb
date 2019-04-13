class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    nodes.each { |nd| return nd if nd.val == i }
    nil
  end

  def first
    @head
  end

  def last
    @tail
  end

  def empty? #Works
    @tail.prev == @head
  end

  def get(key) #Works
    nodes.each { |nd| return nd.val if nd.key == key }
    nil
  end

  def include?(key) #Works
    nodes.each { |nd| return true if nd.key == key }
    false
  end

  def append(key, val) #Works
    a = Node.new(key, val)
    a.next = last
    a.prev = last.prev
    last.prev.next = a
    last.prev = a
  end

  def update(key, val) #Works
    nodes.each { |nd| nd.val = val if nd.key == key }
  end

  def remove(key) #Works
    nodes.each { |nd| nd.remove if nd.key == key }
  end

  def nodes #Works
    nxt = @head.next
    arr = [nxt]

    until arr.include?(@tail)
      arr << arr[-1].next
    end

    arr   
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
                                                                                

# a = LinkedList.new
# p a.first #W
# p a.last  #W

# a.append(:second, 2) #W
# a.append(:third, 3)
# p a.empty? #W
# p a.include?(:second) #W

# a.update(:second, 5) #W
# p a.get(:second) #W

# a.remove(:third) #W
# p a.last.prev.val

# p a[3] #W
# p a.get(:third)
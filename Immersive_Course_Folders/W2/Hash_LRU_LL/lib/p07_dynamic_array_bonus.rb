class StaticArray
  attr_reader :store

  def initialize(capacity)
    @store = Array.new(capacity)
  end

  def [](i)
    validate!(i)
    self.store[i]
  end

  def []=(i, val)
    validate!(i)
    self.store[i] = val
  end

  def length
    self.store.length
  end

  private

  def validate!(i)
    raise "Overflow error" unless i.between?(0, self.store.length - 1)
  end
end

class DynamicArray
  attr_accessor :count

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @count = 0
  end

  def [](i)
    case i
    when i < 0
      num = (@store.length) - (i.abs)
      @store[num]
    else 
      @store[i] unless i > (@store.length - 1) 
    end
  end

  def []=(i, val)
    @store[i] = val unless i > (capacity - 1) || i < 0 
  end

  def capacity #Works
    @store.length
  end

  def include?(val) #Works
    (0..7).each do |i| 
      if @store[i] == val 
        return true 
      end
    end
  end

  def push(val) #Works
    new_store = StaticArray.new(capacity + 1)
    0.upto(capacity - 1) { |i| new_store[i] = @store[i] }
    new_store[capacity] = val
    @count += 1
    @store = new_store
    resize! if @count > capacity - 1
  end

  def unshift(val) #Works
    old_len = capacity - 1
    @count += 1
    resize!
    (0..old_len).to_a.reverse.each { |i| @store[i + 1] = @store[i] }
    @store[0] = val
  end

  def pop #works
    new_store, killed_i = StaticArray.new(capacity - 1), @store[capacity - 1]
    0.upto(capacity - 2) { |i| new_store[i] = @store[i] }
    @store = new_store
    killed_i
  end

  def shift #works
    return nil if @store[0] == nil 

    new_store, one = StaticArray.new(capacity - 1), @store[0]
      1.upto(capacity - 1) do |i|
        adjusted_i = i - 1
        new_store[adjusted_i] = @store[i]
      end
    @store = new_store
    one
  end

  def first #Works
    @store[0]
  end

  def last #Works
    @store[capacity - 1]
  end

  def each
    0.upto(capacity - 1) do |i|
      if block_given?
        Proc.call(@store[i])
      else
        p @store[i]
      end
    end
  end

  def to_s
    "[" + inject([]) { |acc, el| acc << el }.join(", ") + "]"
  end

  def ==(other)
    return false unless [Array, DynamicArray].include?(other.class)
    # ...
  end

  alias_method :<<, :push
  [:length, :size].each { |method| alias_method method, :count }

  private

  def resize! #Works
    num = @store.length * 2
    new_store = StaticArray.new(num)
    0.upto(@store.length - 1) { |i| new_store[i] = @store[i] }
    @store = new_store 
  end
end

#Test
# a = DynamicArray.new(4)
# alpha = ("a".."z").to_a
# 0.upto(a.capacity - 1) { |i| a[i] = alpha.shift }
# p a[0]
# p a.capacity
# a.shift 
# p a.capacity
# a.pop
# p a.capacity
# a.push(4)
# p a.include?(4)
# p a.last
# p a.first
# a.unshift("blah")
# b = []
# 0.upto(a.capacity - 1) { |i| b << a[i] }
# p b
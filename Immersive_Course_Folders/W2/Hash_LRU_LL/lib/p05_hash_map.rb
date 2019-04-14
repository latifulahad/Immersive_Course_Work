require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key) #Works
    @store[bucket(key)].include?(key)
  end

  def set(key, val) #Works
    if @store[bucket(key)].include?(key)
      @store[bucket(key)].update(key, val)
    else
      @store[bucket(key)].append(key, val)
      @count += 1
    end
  end

  def get(key) #Works
    @store[bucket(key)].get(key)
  end

  def delete(key) #Works
    @store[bucket(key)].remove(key)    
  end

  def each 
    block_given? ? @store.each { |ll| proc.call(ll) } : @store.each { |ll| yield ll }
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    @store.flatten.each { |ll| count += ll.nodes.size }
    count > @store.size ? 8.times { @store << LinkedList.new } : true
  end

  def bucket(key)
    (key.hash) % 8
  end
end

#Tests 
# a = HashMap.new
# a.set(:sabit, 1)
# a[:suravi] = 2 #Works
# a[:sabit] #Works

# a.delete(:sabit) #Works
# p a.include?(:sabit)



class LRUCache
  attr_reader :holder, :og_dimension
  def initialize(num)
    @og_dimension = num
    @holder = Array.new(num)
  end

  def count
    @holder.compact!
    holder.size
  end

  def add(el)
    # adds element to cache according to LRU principle
    if present?(el) 
      handle_dup(el)
      manage_s
    else 
      @holder << el
      manage_s
    end
  end

  def show
    holder
  end

  private
  def present?(el)
    holder.include?(el)
  end

  def handle_dup(el)
    @holder.delete(el)
    @holder << el
  end

  def manage_s
    count > og_dimension ? @holder.shift : true
  end
end

# Tests
# johnny_cache = LRUCache.new(4)
# johnny_cache.add("I walk the line")
# johnny_cache.add(5)
# johnny_cache.count # => returns 2
# johnny_cache.add([1,2,3])
# johnny_cache.add(5)
# johnny_cache.add(-5)
# johnny_cache.add({a: 1, b: 2, c: 3})
# johnny_cache.add([1,2,3,4])
# johnny_cache.add("I walk the line")
# johnny_cache.add(:ring_of_fire)
# johnny_cache.add("I walk the line")
# johnny_cache.add({a: 1, b: 2, c: 3})
#  johnny_cache.show 
# => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
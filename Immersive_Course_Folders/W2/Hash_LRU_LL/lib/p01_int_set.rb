class MaxIntSet
  def initialize(max)
    @max = max
    @store = []
  end

  def insert(num)
     is_valid?(num) ? @store << num : raise("Out of bounds")
  end

  def remove(num)
    @store.delete(num)
  end

  def include?(num)
    @store.include?(num)
  end

  private

  def is_valid?(num)
    return false if num > @max || num < 1
    true
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num unless include?(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    idx = (num % num_buckets)
    @store[idx]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !include?(num)
      self[num] << num
      @count += 1
    end
    resize! if @count > @store.size
  end

  def remove(num)
    @count -= 1 if include?(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    idx = (num % num_buckets)
    @store[idx]
  end

  def num_buckets
    @store.length
  end

  def resize!
     20.times { @store << Array.new }
    @store.flatten.each { |el| self[el] << el }   
  end

end

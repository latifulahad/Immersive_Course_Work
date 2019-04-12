class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    self[key] << key
    @count += 1
    resize! if count > @store.size
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if include?(key)
      @count -= 1
      self[key].delete(key)
    end
  end

  private

  def [](num)
    @store[(num.hash % num_buckets)]
  end

  def num_buckets
    @store.length
  end

  def resize! 
    8.times { @store << Array.new }
    @store.flatten.each { |el| self[el] << el }
  end
end

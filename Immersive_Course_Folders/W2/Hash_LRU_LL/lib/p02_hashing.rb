class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    length, val, range = self.size, 0, (self[0] - self[-1]).abs unless self.empty?
    self.each { |el| val += el }
    self.empty? ? (1).hash : (length + val + range).hash 
  end
end

class String
  def hash
    letters, length = self.chars.map(&:ord), self.size
    disparity = letters[0] + letters[-1]
    (length + disparity).hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    # self.keys.sort_by(&:hash).hash 
    # to_a.sort_by(&:hash).hash
    0
    self.keys.size.hash
  end
end

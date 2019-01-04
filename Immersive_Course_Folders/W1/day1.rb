#Enumerables 
class Array

  def my_each(&prc)
    i = 0

    while i < self.length
      proc.call(self[i])
      i += 1
    end

  end 

  def my_select(&prc)
    arr = []

    self.my_each do |el|
      arr << el if proc.call(el)
    end

    arr
  end 

  def my_reject(&prc)
    arr = []
    self.my_each { |el| arr << el if !proc.call(el) }
    arr
  end

  def my_any?(&prc)
    self.my_each do |ele|
      if proc.call(ele)
        return true
      end
    end

    false
  end

  def my_all?(&prc)
    self.my_each { |el| return false if !proc.cal(el) }
    true
  end

  def my_flatten
    arr = []
    self.my_each do |el|
      if el.is_a?(Array)
        el.my_each { |ele| arr << ele }
      else
        arr << el
      end
    end
    arr
  end 

  def my_zip(*list)
    ref_num = self.length 
    list.each do |a|
      a << nil until a.length == ref_num
    end

    result = Array.new(self.length) { Array.new }
    self.each_with_index { |el, i| result[i] << el }

      list.each do |arr|
        arr.each_with_index do |el, i|
          result[i] << el
        end
      end

    result
  end 

  def my_rotate(num = 1)
    if num >= 1
      num.times do
        el = self.shift
        self << el
      end
      self
    else
      num.abs.times do
        el = self.pop
        self.unshift(el)
      end
      self
    end
  end 
  
  def my_join(ag = nil)
    str = ""
    if ag
      self.each_with_index do |el, i|
        if i < self.length - 1
          str << el + ag
        else
          str << el 
        end
      end
      str
    else
      self.my_each { |el| str << el }
      str
    end
  end 

  def my_reverse
    arr = []
    i = self.length - 1
    until i < 0
      arr << self[i]
      i -= 1
    end 
    arr 
  end

end

#  1 a = [1, 2, 3]
#    a.my_each { |num| puts num * 2 }

# 2 a = [1, 2, 3, 4, 5]
# p a.my_select { |num| num > 2 }

# 3 a = [1, 2, 3, 4, 5]
# p a.my_reject { |num| num >= 4 }

# 4 a = [1, 2, 3, 4, 5]
# p a.any? { |num| num = 5 }

# 5 a = [1, 2, 3, 4, 5]
#  p a.all? { |num| num < 7 }

# 6 a = [1, 2, [3], [4, 5], 6]
# p a.my_flatten

# 7 a = [4, 5, 6]
# p a.my_zip([1,2], [8]) => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]

# 8 p [1, 2, 3, 4].rotate
# p [1, 2, 3, 4].rotate(-1)

# 9 a = [ "a", "b", "c", "d" ]
# p a.my_join         # => "abcd"
# p a.my_join("$")    # => "a$b$c$d"

# 10 p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
# p [ 1 ].my_reverse               #=> [1]
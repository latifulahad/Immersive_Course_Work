def range(a, b)
  return [] if a == b 
  range(a, b - 1) << b - 1
end
# p range(1, 4)
#FYI Had to look at the solutions

def sum(arr)
  return arr.last if arr.length == 1
  sum(arr[0...-1]) + arr[-1]
end
# p sum([1, 2, 3])
#FYI did this on my own

def exp(num, power)
  return 1 if num == 0
  return num if power == 1
  exp(num, power - 1) * num
end
# p exp(2, 3)
#FYI Did this on my own
# EXP(2.0) problem was not attempted, due to convoluted and purposeless nature of the problem.

class Array
  def deep_dup
    arr = []
    self.each do |el|
     arr << (el.is_a?(Array) ? el.deep_dup : el)
    end
    arr 
  end
end
# TEST a = [1, [2, 3], [4, 5, 6]]
# b = a.deep_dup
# b[1] << 9
# p a
# p b
# FYI had to looked @ the solutions

def fibonacci(n)
  if n <= 2
    [1, 1].take(n)
  else
    ans = fibonacci(n - 1)
    ans << ans[-2] + ans[-1]
  end
end
#p fibonacci(5)
#Copied exact answer

def b_search(arr, trg)
  # iterative version vvvvv
  # return nil if !arr.include?(trg)

  # mid = arr.length / 2
  # return mid if arr[mid] == trg

  # left = arr.select { |el| el <= arr[mid] }
  # right = arr.select { |el| el > arr[mid] }

  # left.each_with_index { |el, i| return i if trg == el }
  # right.each_with_index { |el, i| return (i + 1) + mid if trg == el }
   return nil if !arr.include?(trg)
   mid = arr.length / 2

   case trg <=> arr[mid]
    when -1
      b_search(arr[0...mid], trg)
    when 0
      mid
    when 1
      complicated_ans = b_search(arr[mid + 1..-1], trg)
      complicated_ans + mid + 1
    end
end
#  Tests
#  b_search([2, 4, 5, 6, 8, 10], 6) # => 3
#  b_search([1, 2, 3], 1) # => 0
#  b_search([2, 3, 4, 5], 3) # => 1
#  b_search([2, 4, 6, 8, 10], 6) # => 2
#  b_search([1, 3, 4, 5, 9], 5) # => 3
#  b_search([1, 2, 3, 4, 5, 6], 6) # => 5
#  b_search([1, 2, 3, 4, 5, 6], 0) # => nil
#  b_search([1, 2, 3, 4, 5, 7], 6) # => nil
#  Looked at structure, due to lack of inspiration with the
#  inductive steps... 

def merge_s(arr)
  return arr if arr.length < 2

  mid = arr.length / 2
  left = arr.take(mid)
  right = arr.drop(mid)

  a = merge_s(left) 
  b = merge_s(right)
  merge(a, b)
end

def merge(a, b)
  c = []
  a.each_with_index do |el, i|
    if el < b[i]
      c << [el, b[i]]
    else
      c << [b[i], el]
    end
  end
  
  c.flatten
end
#Test
# d = [1, 3, 5]
# e = [2, 4, 6]
# p merge(d, e)
# a = [6, 5, 3, 4, 1, 2]
# p merge_s(a)
#FYI I didn't complete this task 100% 




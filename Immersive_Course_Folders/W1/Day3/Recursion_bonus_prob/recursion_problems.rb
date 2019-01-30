#Problem 1: 

def sum_recur(array)
  return array[0] if array.length == 1
  sum_recur(array[0...-1]) + array[-1]
end
# Demonstration
# a = [1, 2, 3, 4]
# p sum_recur(a)

#Problem 2: 

def includes?(array, target)
  return false if array.empty?
  return true if array[0] == target
  includes?(array[1..-1], target)
end
# Demo vvv
# a = [15, 2, 9, 3, 1, 10]
# p includes?(a, 5)

# Problem 3: 

def num_occur(array, target)
return 0 if array.empty?

  if array[0] == target 
    occurance = 1
  else 
    occurance = 0
  end

occurance += num_occur(array[1..-1], target)
end
# Demo vvv
# a = [1, 20, 5, 15, 1, 12, 9]
# b = 1
# p num_occur(a, b)

# Problem 4: 

def add_to_twelve?(array)
  return false if array.length <= 1

  if array[0] + array[1] == 12
    return true
  end 
  add_to_twelve?(array[2..-1])
end
# Demo vvv
# a = [10, 4, 12, 1, 10, 2]
# p add_to_twelve?(a)

# Problem 5: 

def sorted?(array)
  return true if array.length <= 1

   if array[0] > array[1]
    return false
   end

   sorted?(array[1..-1])
end
# Demo vvv
# a = [10, 6, 11, 7, 8]
# b = [1, 2, 3, 4]
# p sorted?(b)

# Problem 6: 

def reverse(string)
  return string if string.length == 1
  string[-1] + reverse(string[0...-1])
end
# Demo vvv
# a = "sabit"
# p reverse(a)

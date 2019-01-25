
def sum_to(num)
  return nil if num < 1
  return 1 if num == 1

  sum_to(num - 1) + num
end
#Test case
#p sum_to(9) => 45

def add_numbers(arr)
return nil if arr.empty? 
return arr.last if arr.length < 2
return arr[0] + arr[1] if arr.length == 2

add_numbers(arr[0...-1]) + arr[-1]
end
# Test case
# p add_numbers([1,2,3,4]) #=> returns 10

def gamma_function(num)
  return nil if num < 1
  return 1 if num == 1
  
  (num - 1) * gamma_function(num - 1)
end
#Test case
#p gamma_function(4)

def ice_cream_shop(arr, str)
  return false if arr.empty?
  return true if arr.last == str
  ice_cream_shop(arr[0..-2], str)
end
#Test case
#p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true

 def reverse(str)
  return str if str.length == 1 
  str[-1] + reverse(str[0...-1])
 end
 #Test case
 #p reverse("sabit")
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

def my_min(list)
  element = list[0]

  list.each_with_index do |el, i|
   if i == 0 
     el < list[i + 1] ? element = el : element = list[i + 1]
   end
   el < element ? element = el : element
  end

  element
end
#TEST 
# p my_min(list)  # =>  -5....TimeC = n

def my_min_quad(list)
  other_ans = 0
  list.each_with_index do |el, i|
    ans = el
    list.each_with_index do |el_2, i_2|
      if i_2 > i
        el_2 < ans ? other_ans = el_2 : other_ans
      end
      if i_2 == list.length - 1 && ans < other_ans
        return ans
      end 
    end
  end
end
#TEST
# p my_min_quad(list) #TimeC = n**2

def find_best_val(list)
  combos = []

  list.each_index do |i|
    (i..list.length - 1).each do |i_2|
      combos << list[i..i_2] 
    end
  end
  combos.map { |sub| sub.reduce(:+) }.max
end

list = [5, 3, -7]
p find_best_val(list)

#0(n) complexity's method was too time consuming to write indepedently, therefore I cheated.

def find_best_val_2(list)
  biggest_val = list[0]
  c_val = list[0]

  return list.max if list.all? { |num| num < 0 } #base_case-ish

  (1..list.length - 1).each do |i|
    c_val = 0 if c_val < 0 # to flush out the - number related issues
    c_val += list[i] #holds sum of list[0..i]
    biggest_val = c_val if c_val > biggest_val
  end

  biggest_val
end

p find_best_val_2(list)
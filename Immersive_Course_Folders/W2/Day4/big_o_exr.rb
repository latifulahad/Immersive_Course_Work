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
# p find_best_val(list)

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

# p find_best_val_2(list)

Dic = File::readlines("Dictionary copy.txt")
New_dic = Dic.map { |line| line.chomp }

def anagram?(a, b)
  return false if a.size != b.size
  words = [a, b]  #1
  letter_form = words.map { |wd| wd.chars } #n**2
  letter_form[0].all? { |ltr| letter_form[1].include?(ltr) } #n**2 
end

anagram?("elvis", "lives") #big_o(n**2)

def anagram_2(a, b)
  c, d = a.chars, b.chars
  c.each do |el|
    f = d.find_index(el)
    return false if f.nil?
    d.delete_at(f)
  end
  d.empty? 
end

#ex. "zonal", "zoned"
anagram_2("elvis", "lives") #big_o(n)

def anagram_3(a, b)
  c, d = a.chars.sort, b.chars.sort
  c == d 
end
#TEST
 anagram_3("elvis", "lives") #big_o(n)

def anagram_4(a, b)
  helper_hash = Hash.new(0)
  a.each_char.with_index { |ltr, i| helper_hash[ltr] += 1 }
  helper_hash.each do |ltr, num|
    if !b.include?(ltr) && b.count(ltr) == num
      return false
    end
  end
  true
end

anagram_4("elvis", "lives") #big_o(n**2)

def two_sum?(arr, trg_sum)
  num = arr.length - 1 
  indeces = (0..num).to_a
  arr.each_with_index do |el, i|
    new_indx = indeces.select { |idx| idx != i } 
    new_indx.each do |remain_i|
      return true if (arr[i] + arr[remain_i]) == trg_sum
    end
  end

  false
end 

arr = [7, 0, 5, 1]
two_sum?(arr, 6) # => should be true
two_sum?(arr, 10) #big_o(n**2)

def okay_two_sum?(arr, trg_sum)
  hash = {}
  arr.each do |el|
    return true if hash[trg_sum - el]
    hash[el] = true 
  end

  false
end 

p okay_two_sum?(arr, 6)
p okay_two_sum?(arr, 10) 
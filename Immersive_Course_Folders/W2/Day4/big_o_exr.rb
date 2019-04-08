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

okay_two_sum?(arr, 6)
okay_two_sum?(arr, 10) 

# windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

def max_windowed_rng(arr, size)
 holder, other_holder = [], []

  (0..(arr.length - 1)).each do |i|
    num = (i + (size - 1)) 
    break if num > arr.length - 1
    sub = []
    (i..num).each { |idx| sub << arr[idx] }
    holder << sub
  end
  
  holder.each { |sub| other_holder << (sub.max - sub.min) }
  other_holder.max
end


# max_windowed_rng([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# max_windowed_rng([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5

class MyQueue
  def initialize(arr)
    @arr = arr
  end

  def enqueue(el)
    @arr << el
  end

  def dequeue
    arr.shift
  end

  def empty?
    @arr.empty? 
  end

  def size
    @arr.length
  end

  def peek
    @arr[0]
  end
end

class MyStack
  def initialize
    @arr = []
  end

  def push(el)
    @arr << el
  end

  def pop
    arr.pop
  end

  def empty?
    @arr.empty? 
  end

  def size
    @arr.length
  end

  def peek
    @arr[-1]
  end
end


class StackQueue
  def initialize(arr)
    @in_stack = MyStack.new(arr)
    @out_stack = MyStack.new(arr)
  end

  def size
    @in_stack.size + @out_stack.size
  end

  def empty?
    @in_stack.empty? && @out_stack.empty?
  end

  def enqueue(el)
    @in_stack.push(el)
  end

  def dequeue
    handle_final_el if out_stack.empty?
    @out_stack.pop
  end

  private
  def handle_final_el
    @out_stack.push(@in_stack.pop) until in_stack.empty?
  end
end


class MinMaxStack #REtrival of Min && Max in 0(1)
  def initialize
    @store = MyStack.new
  end

  def push(el)
    hash = {"min"=>el, "max"=>el, val: el}
    if @store.size == 0
      @store.push(hash)
    else
      c_standing = @store.peek
      @store.push(modify_c_stand?(c_standing, el))
    end  
  end

  def pop
    @store.pop
  end

  def empty?
    @store.empty? 
  end

  def size
    @store.size
  end

  def peek
    @store.peek
  end

  def max
    @store.peek["max"]
  end

  def min
    @store.peek["min"]
  end

  private
  def modify_c_stand?(hash, el)
    hash["min"] > el ? hash["min"] = el : true
    hash["max"] < el ? hash["max"] = el : true
    hash[:val] = el
    hash
  end
end

class MinMaxStackQueue #Queue composed of Stacks w/retrival of min&max in o(1)
  def initialize
    @in_stack = MyStack.new
    @out_stack = MyStack.new
  end

  def size
    @in_stack.size + @out_stack.size
  end

  def empty?
    @in_stack.empty? && @out_stack.empty?
  end

  def enqueue(el)
    hash = {"min"=>el, "max"=>el, val: el}
    if @in_stack.size == 0
      @in_stack.push(hash)
    else
      c_standing = @in_stack.peek
      @in_stack.push(modify_c_stand?(c_standing, el))
    end  
  end

  def dequeue
    handle_final_el if out_stack.empty?
    @out_stack.pop
  end

  def peek
    @in_stack.peek
  end
  
  private
  def handle_final_el
    @out_stack.push(@in_stack.pop) until in_stack.empty?
  end

  def modify_c_stand?(hash, el)
    hash["min"] > el ? hash["min"] = el : true
    hash["max"] < el ? hash["max"] = el : true
    hash[:val] = el
    hash
  end
end

a = MinMaxStackQueue.new
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.enqueue(4)
p a.peek
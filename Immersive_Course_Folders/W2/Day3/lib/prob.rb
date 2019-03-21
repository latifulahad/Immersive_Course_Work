#TDD work flow practice

def my_uniq(arr)
    a = {}
    arr.each { |n| a[n] = true }
    a.keys
end

def two_sum(arr)
  ans = []

  arr.each_with_index do |num, i|
    arr[i + 1..-1].each_with_index do |el, i2|
      adj = (i + 1)
      ans << [i, (i2 + adj)] if num + el == 0
    end
  end

  ans
end

def my_trans(arr)
  num = arr.length
  ans = Array.new(num) { Array.new }

  arr.each do |sub|
    sub.each_with_index do |el, i2|
      ans[i2] << el 
    end
  end

  ans
end

def best_days(arr)
  ans = []
  # stock_p = [15, 5, 10, 20, 15, 5, 20]
  arr.each_with_index do |price, day|
    unless day == arr.length - 1
     r_half = arr[day + 1..-1].sort 
      if r_half[-1] > price
        day_2 = arr[day + 1..-1].index(r_half[-1]) + (arr[0..day].length)
        ans << [day, day_2]
      end
    end
  end

  help_bd(arr, ans)
end

def help_bd(arr, ans)#This # will select pair/s w/largest dif in val
  hash = Hash.new([])

  ans.each_with_index do |pairs, p_num|
    buy_d, sell_d = pairs
    dif = (arr[buy_d] - arr[sell_d]).abs
    hash[p_num] = dif # { pair_idx=>dif_val, pair_idx=>dif_val }
  end

  filter_hash(ans, hash)
end

def filter_hash(list, hash)#This will use hash to pick from list 
  a, ans = [], []
  
  vals = hash.values.sort #will sort the dif from l > highest
    hash.each { |pair_i, dif| a << pair_i if dif == vals[-1] }
  a.each { |pair_i| ans << list[pair_i] }
  ans 
end

#Big O() && Time Complexity

Fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"

def sluggish_octo(list) # 0(n**2)
  fish = 0
  list.each_with_index do |f, i|
    list.each_with_index do |f2, i2|
      if i2 > i
        f2 > f ? fish = [f2, i2] : [f, i]
      end
    end
  end
  fish
end
#TEST WORKS
# p sluggish_octo(Fish)

class Array #monkey patching so in order to write n log n type algorithm
  def merge_sort(prc)
    prc ||= Proc.new { |x, y| x <=> y }
    
    mid = self.length / 2
    return self if mid <= 1
    sorted_l = self[0..mid].merge_sort(prc)
    sorted_r = self[mid + 1..-1].merge_sort(prc)

    merge(sorted_l, sorted_r, prc)
  end
  
end
def merge(a, b, prc)
  merged = []

  until a.empty? || b.empty?
    case prc.call(a.first, b.first)
    when -1
      merged << a.shift
    when 0
      merged << a.shift
      merged << b.shift
    when 1
      merged << b.shift
    end
  end
  merged.concat(a)
  merged.concat(b)
  merged
end

def n_log_n_version(arr)
  prc = Proc.new { |x, y| x.length <=> y.length }
  arr.merge_sort(prc)[-1]
end
#TEST
# p n_log_n_version(Fish) # => "fiiiissshhhhhh"

def clever_OCT(list) #0(n)
  word = 0
  list.each_with_index do |wd, i|
    unless i == list.size - 1
      wd.length > list[i + 1].length ? word = wd : word = list[i + 1]
    end
  end
  word
  # list.reduce([list[0]]) { |acc, wd| acc.length > wd.length ? acc : wd } # 1liner_vr
end
#TEST
# p clever_OCT(Fish)


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dance(tile, tl_arr)
  tl_arr.each_with_index { |tl, ans| return ans if tl == tile }
end
#TEST
# p slow_dance("up", tiles_array)

new_struc = {}
tiles_array.each_with_index { |tl, idx| new_struc[tl] = idx }
def constant_dance(tile, tiles_array)
  tiles_array[tile]
end
#TEST
# p constant_dance("right", new_struc)
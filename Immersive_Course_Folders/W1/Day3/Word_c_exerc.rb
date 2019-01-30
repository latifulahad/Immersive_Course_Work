# require "set"

class WordChainer
attr_reader :dictionary
attr_accessor :viewed_words, :current_words

  def initialize(dictionary = File::readlines("Dictionary.txt").map(&:chomp))
    @dictionary = dictionary
    @viewed_words = {}
    @current_words = []
  end

  def adjacent_words(word)
    
    arr = dictionary.reject do |wrd|
      delete = false

      wrd.each_char.with_index do |char, i|
        a, b = word_hash(word), word_hash(wrd)
        num = diff_counter(a, b)

        if wrd.length != word.length
          delete = true
          break
        elsif num > 1
          delete = true
          break 
        end 
      end

    delete 
    end
    
    arr 
  end

  def run(source, target)
    @current_words, @viewed_words = [source], @viewed_words[source] = nil
    
    while @current_words.is_a?(Array) 
      updated_list = explore_current_wrds
      @current_words = updated_list
    end

    build_path(target)
  end


  private

  def word_hash(wrd)
    h = Hash.new(0)
    wrd.each_char.with_index do |char, i|
      h[i] = char
    end
    h 
  end
  
  def diff_counter(a, b)
    num = 0
    a_1, b_1 = a.values, b.values 
    a_1.each_with_index { |el, i| num += 1 if b_1[i] != el }
    num
  end

  def explore_current_wrds
  new_current_wrds = []

    @current_words.each do |word|
      list = adjacent_words(word)

      list.each do |adjacent_w|
        next if @viewed_words.has_key?(adjacent_w)
        new_current_wrds << adjacent_w
        @viewed_words[adjacent_w] = word 
      end
    end
    
    explore_wrd_helper(new_current_wrds)
  end

  def explore_wrd_helper(new_list)
    output = {}

    viewed_words.each do |adjacent_wd, og_wd|
      if new_list.include?(adjacent_wd)
        output[adjacent_wd] = og_wd
      end
    end

    output
  end

  def build_path(trg)
    wanted_v = 0
    viewed_words.each { |adj_wd_k, og_v| wanted_v = og_v if adj_wd_k == trg }
    arr = viewed_words.values 
    wanted_idx = arr.index(wanted_v)
    arr[1..wanted_idx]
  end

end

#Test
a = WordChainer.new
#p a.run("duck", "ruby")
#b = a.adjacent_words("Fast")
# c = {}
# b.each_with_index { |wd, i| c[i] = wd }
# p c

# Test for class set 
# b = Set.new(["Fast"])
# p b.subset?(a.dictionary)

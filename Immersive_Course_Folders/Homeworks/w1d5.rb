#ADT advanced data structure exercises 
class Stack
  def initialize
    @container = []
  end

  def push(element)
    @container << element
  end

  def pop
    @container.pop
  end

  def peek
    @container[-1]
  end

end

#Tests
# a = Stack.new
# a.push("Suravi")
# a.push("Sabit")
# a.push("Tony")
# puts a.peek

class Queue

  def initialize
    @container = []
  end

  def enqueue(element)
    @container << element
  end

  def dequeue
    @container.shift
  end

  def peek
    @container[0]
  end

end

#Test
# a = Queue.new
# a.enqueue("Suravi")
# a.enqueue("Sabit")
# a.enqueue("Tony")
# a.dequeue
# puts a.peek

class Map

  def initialize
    @container = []
  end

  def set(k, v)
    keys = []
    @container.each { |map| keys << map[0] }

    if keys.include?(k)
      index = keys.index(k)
      @container[index][1] = v
    else
      @container << [k, v]
    end      
  end

  def get(k)
    @container.each do |map|
      if map[0] == k
        return map[1]
      end
    end
    puts "Sorry this key is not registered"
  end
  
  def remove(k)
    index = 0
    @container.each_with_index { |map, i| index = i if map[0] == k }
    @container.delete(@container[index])
  end
  
end
#Tests
# a = Map.new 
# a.set("Sabit", 1)
# a.set("Suravi", 2)
# a.set("Tony", 3)
# a.remove("Tony")



require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :map
  def initialize(max, prc)
    @map = HashMap.new #my_interpretation would have been {} 
    @store = LinkedList.new #my_inter ll => { node_obj-node_obj-node_obj }
    @max = max
    @prc = prc
  end
  
  def count
    @map.count
  end

  def get(key)
   if @map.include?(key)
    update_node!(key)
   else
     @map.set(key, true)
     @store.append(key, calc!(key))
     @map.count > @max ? eject! : true
   end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  def my_to_s
    @store.each
  end

  private

  def calc!(key)
    @prc.call(key)
  end

  def update_node!(node)
    @store.remove(node)
    @store.append(node, calc!(node))
  end

  def eject!
    @store.remove(@store.first.key)
  end

end

# prc = Proc.new { |key| key ** 2 } 
# a = LRUCache.new(4, prc)
# a.get(2)
# a.get(3)
# a.get(4)
# a.get(5)
# a.get(2)
# a.get(6)
# p a.map.count
# p a.my_to_s

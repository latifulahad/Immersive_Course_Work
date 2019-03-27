require_relative "display"

class Player
  attr_reader :name, :display, :color 

  def initialize(name, display, color)
    @name, @display, @color = name, display, color 
  end

  def make_move
    display.cursor.get_input
  end 

end
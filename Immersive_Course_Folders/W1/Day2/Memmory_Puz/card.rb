class Card
CARDS = { 
  "k"=>11,
  "q"=>11,
  "j"=>11,
  "10"=>10,
  "9"=>9,
  "8"=>8,
  "7"=>7,
  "6"=>6,
  "5"=>5,
  "4"=>4,
  "3"=>3,
  "2"=>2,
  "a"=>1
 }
 attr_reader :c_value
 attr_accessor :f_status

  def initialize(card)
    @card = card
    @c_value = CARDS[@card]
    @f_status = "down"
  end

  # def display_c
  #   @c_value 
  # end
end

#p Card::CARDS["k"] Checking to retrieve value from class contant, which is a hash
# a = Card.new("k") 
# a.f_status = a.c_value #Checking attr_accessor
# p a.f_status 
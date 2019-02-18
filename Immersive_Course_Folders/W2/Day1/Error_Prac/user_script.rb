require_relative 'super_useful'

puts "'five' == #{convert_to_int('five')}" #WORKS

p feed_me_a_fruit #WORKS in accordance to specs

sam = BestFriend.new("Sabit", 6, 'Driving Fast') #WORKS

sam.talk_about_friendship
sam.do_friendstuff
sam.give_friendship_bracelet

# Phase 1 Test Approach
# if __FILE__ == $PROGRAM_NAME
#   begin
#     puts "Select number hero"
#     num = gets.chomp
#     p convert_to_int(num)
#   rescue ArgumentError => a
#     puts a
#     retry
#   end
# end
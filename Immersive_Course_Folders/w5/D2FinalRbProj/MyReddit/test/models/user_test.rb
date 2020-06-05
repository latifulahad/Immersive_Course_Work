require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
  test "fails due 2 lack of pass" do
    assert_not (User.new(name: "Omar Ahmed", email: "omar@aol.com")).save  
  end

  test "checks for the name" do
    assert (User.new(name: "Omar Ahmed", email: "omar@aol.com", password: "sabitman3")).save  
  end

end

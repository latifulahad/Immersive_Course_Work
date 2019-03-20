require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }

  describe "#initialize" do
    subject(:dessert) { Dessert.new("cake", 3, chef) }

    it "sets a type" do 
      expect(dessert.type).to eq("cake")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(3)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("pie", "three", chef)}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    subject(:dessert) { Dessert.new("cake", 3, chef) }

    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient("milk")
      expect(dessert.ingredients).to include("milk")
    end
  end

  describe "#mix!" do
    subject(:dessert) { Dessert.new("cake", 3, chef) }
      
    it "shuffles the ingredient array" do
      list = %w(milk sugar butter)
      list.each { |ing| dessert.add_ingredient(ing) }
      dessert.mix!
      expect(dessert.ingredients).to_not eq(list)
    end
  end

  describe "#eat" do
    subject(:dessert) { Dessert.new("cake", 3, chef) }

    it "subtracts an amount from the quantity" do
      dessert.eat(1)
      expect(dessert.quantity).to eql(2)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { dessert.eat(4)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    subject(:dessert) { Dessert.new("cake", 3, chef) }

    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chief Sabit the Great")

      expect(dessert.serve).to include("Chief Sabit the Great")
    end
  end

  describe "#make_more" do 
    subject(:dessert) { Dessert.new("cake", 3, chef) }

    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end 
  end
end

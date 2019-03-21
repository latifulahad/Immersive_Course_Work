require "rspec"
require "prob"

  describe "#my_uniq" do 
    a = [1, 2, 2, 3] 
    b = my_uniq(a)
    
    it "should return a new array" do
      expect(b).to_not be(a)
    end

    it "should yield an uniq array" do
      expect(b).to eq([1, 2, 3])
    end
  end


  describe "#two_sum" do
    a = [-1, 0, 2, -2, 1]
    b = two_sum(a)

    it "finds elements that sum to zero" do
      expect(b.length).to eq(2) 
    end

    it "outputs results sorted in dictionary style" do
      expect(b).to eq([[0, 4],[2, 3]])
    end
  end
  

  describe "my_trans" do
    a = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    b = my_trans(a)

    it "renders new_arr based on nested arr's i" do
      expect(b).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end
  end


describe "best_days" do
  stock_p = [15, 5, 10, 20, 15, 5, 20]
  ans = best_days(stock_p)

  it "selects most profitable pair of day aka indeces" do
    expect(ans).to eq([[1, 3], [5, 6]])
  end
end


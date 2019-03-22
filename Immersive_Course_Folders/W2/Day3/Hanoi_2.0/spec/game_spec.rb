require "rspec"
require "game"

describe Hanoi do
  let(:player) { double("Sabit") }
  subject(:round) { Hanoi.new(player) }

  it "expect player to be Sabit" do
    expect(round.player).to eq(player)
  end

  it "#move" do
    round.move(0, 1)
    expect(round.board).to eq([[2, 3],[1],[]])
  end

  it "#won?" do
    round.board = [[],[],[1, 2, 3]]
    expect(round.won?).to eq(true)
  end
end
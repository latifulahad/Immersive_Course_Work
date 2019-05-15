class DropHousesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :house
  end
end

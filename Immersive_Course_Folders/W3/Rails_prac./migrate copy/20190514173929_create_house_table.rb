class CreateHouseTable < ActiveRecord::Migration[5.2]
  def change
    create_table :house do |t|
      t.string :address, null: false
      t.timestamp
    end
  end
end

class CreateOwnersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :owners do |t|
      t.string :name, null: false
      t.integer :car_id, null: false
    end
    
    add_index :owners, :car_id
  end
end

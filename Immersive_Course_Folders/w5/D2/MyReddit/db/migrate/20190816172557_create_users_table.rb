class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false 
      t.string :email, null: false, index: true, unique: true
      t.string :pass_digest, unique: true
      
      t.timestamps
    end
  end
end

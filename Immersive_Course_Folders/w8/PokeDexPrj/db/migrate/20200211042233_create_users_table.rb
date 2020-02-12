class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.integer :pass_digest, null: false
      t.integer :session_token, null: false
      
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end

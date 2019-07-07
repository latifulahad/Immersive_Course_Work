class Createtableplayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      
      t.timestamps
    end

    add_index :players, :password_digest, unique: true
    add_index :players, :session_token, unique: true
  end
end

class CreateUsersTables < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :pass_digest, null: false
      t.string :session_token

      t.timestamps
    end

    add_index :users, :session_token
  end
end

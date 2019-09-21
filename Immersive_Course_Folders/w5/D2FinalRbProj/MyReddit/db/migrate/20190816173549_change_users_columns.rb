class ChangeUsersColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :email, :string, null: false, unique: true
    change_column :users, :pass_digest, :string, unique: true
  end
end

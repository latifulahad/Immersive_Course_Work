class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :pass_digest, :string, null: false
  end
end

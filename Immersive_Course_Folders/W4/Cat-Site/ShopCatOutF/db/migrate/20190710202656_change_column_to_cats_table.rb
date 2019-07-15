class ChangeColumnToCatsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :cats, :user_id, :integer, default: nil
  end
end

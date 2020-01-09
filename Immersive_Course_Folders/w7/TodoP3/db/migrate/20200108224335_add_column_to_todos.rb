class AddColumnToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :user_id, :integer, null: false, default: 0

    add_index :todos, :user_id
  end
end

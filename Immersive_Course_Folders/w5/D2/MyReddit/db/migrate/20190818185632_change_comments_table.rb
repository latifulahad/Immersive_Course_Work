class ChangeCommentsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :p_comment_id, :integer
  end
end

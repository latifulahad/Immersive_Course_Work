class CreateSubPostsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_posts do |t|
      t.integer :sub_id, null: false
      t.integer :post_id, null: false
      
      t.timestamps
    end

    add_index :sub_posts, :sub_id
    add_index :sub_posts, :post_id
    add_index :sub_posts, [:post_id, :sub_id], unique: true
  end
end

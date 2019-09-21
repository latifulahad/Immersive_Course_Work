class CreatePostsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :link
      t.text :content
      t.integer :author_id, null: false
      t.string :sub_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :sub_id
  end
end
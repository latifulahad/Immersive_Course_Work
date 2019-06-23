class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :artist_id, null: false
      t.integer :artwork_id, null: false
      t.string :body, null: false

      t.timestamps
    end

    add_index :comments, :artist_id
    add_index :comments, :artwork_id 
  end
end

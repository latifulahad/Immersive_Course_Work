class CreateTagsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :topic_id, null: false
      t.integer :short_url_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :tags, :short_url_id
  end
end

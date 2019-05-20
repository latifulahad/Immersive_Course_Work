class DropColumnFromTagTopics < ActiveRecord::Migration[5.2]
  def change
    remove_column :tag_topics, :user_id, :integer
    remove_column :tag_topics, :short_url_id, :integer
  end
end

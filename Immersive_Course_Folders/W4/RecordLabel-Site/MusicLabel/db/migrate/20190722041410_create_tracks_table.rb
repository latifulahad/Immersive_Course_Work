class CreateTracksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :track_type, default: "regular"
      t.integer :ord
      t.integer :album_id, null: false
    end

    add_index :tracks, :album_id 
  end
end
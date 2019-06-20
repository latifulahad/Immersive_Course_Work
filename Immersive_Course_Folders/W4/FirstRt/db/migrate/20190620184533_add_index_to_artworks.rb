class AddIndexToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_index :artworks, [:title, :artist_id], unique: true
    #we do this to ensure a unique pair so to speak...
  end
end

class AlterArtworksCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :image_url, :integer
  end
end

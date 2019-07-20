class RemoveColumnFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :band_id, :integer
  end
end

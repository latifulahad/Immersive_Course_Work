class ChangeColumnInAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :band_id, :integer, unique: false
  end
end

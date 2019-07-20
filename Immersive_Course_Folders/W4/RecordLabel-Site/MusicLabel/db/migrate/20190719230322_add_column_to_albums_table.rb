class AddColumnToAlbumsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :band_id, :integer, null: false, default: 0

    add_index :albums, :band_id
  end
end

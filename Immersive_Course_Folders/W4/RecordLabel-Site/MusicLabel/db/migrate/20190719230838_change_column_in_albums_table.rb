class ChangeColumnInAlbumsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :band_id, :integer, default: nil
  end
end

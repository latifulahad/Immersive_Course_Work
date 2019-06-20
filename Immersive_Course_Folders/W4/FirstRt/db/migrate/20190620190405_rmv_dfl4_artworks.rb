class RmvDfl4Artworks < ActiveRecord::Migration[5.2]
  def change
    change_column :artworks, :image_url, default: nil
  end
end

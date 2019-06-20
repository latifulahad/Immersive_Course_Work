class AddCol2Artworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :image_url, :string, null: false, default: "n/a"

    add_index :artworks, :image_url, unique: true
  end
end

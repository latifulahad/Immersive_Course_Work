class RemoveCatsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :cats_
  end
end

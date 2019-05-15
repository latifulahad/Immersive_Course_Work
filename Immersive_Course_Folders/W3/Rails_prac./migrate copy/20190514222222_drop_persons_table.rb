class DropPersonsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :persons
  end
end

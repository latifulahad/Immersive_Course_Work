class DropUsersTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :uses_tables
  end
end

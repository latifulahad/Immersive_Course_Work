class AddColumnToCatRentalRequestsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :cat_rental_requests, :user_id, :integer, null: false, default: 0

    add_index :cat_rental_requests, :user_id
  end
end

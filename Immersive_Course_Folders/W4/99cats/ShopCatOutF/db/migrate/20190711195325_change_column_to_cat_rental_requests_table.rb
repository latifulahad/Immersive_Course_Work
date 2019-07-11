class ChangeColumnToCatRentalRequestsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :cat_rental_requests, :user_id, :integer, default: nil
  end
end

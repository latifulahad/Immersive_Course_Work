class Car < ActiveRecord::Base
validates :brand, :model, :year, :color, presence: true

  def no_white_cr
    if self.color == "white"
      self.errors[:color] << 'cannot be white!!!'
    end
  end
  
  belongs_to :person,
  primary_key: :car_id, 
  foreign_key: :id,
  class_name: 'Owner'
end
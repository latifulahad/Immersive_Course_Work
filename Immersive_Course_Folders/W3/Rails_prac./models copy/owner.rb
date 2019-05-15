class Owner < ActiveRecord::Base
  has_many :autos,
  primary_key: :car_id,
  foreign_key: :id,
  class_name: 'Car'
end
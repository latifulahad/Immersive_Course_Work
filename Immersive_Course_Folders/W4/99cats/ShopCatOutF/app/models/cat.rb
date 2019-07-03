class Cat < ApplicationRecord
  ACCEPTABLE_COLORS = %w(red blue green yellow).freeze

  validates :name, :birth_date, :sex, :color, :description, presence: true
  validates :color, inclusion: ACCEPTABLE_COLORS
  validates :sex, inclusion: %w(M F)

  has_many :requests,
  primary_key: :id,
  foreign_key: :cat_id,
  class_name: 'CatRentalRequest',
  dependent: :destroy

end 
class Commment < ApplicationRecord
  validates :body, presence: true
end
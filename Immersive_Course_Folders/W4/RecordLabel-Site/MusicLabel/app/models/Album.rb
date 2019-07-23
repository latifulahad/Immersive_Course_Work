class Album < ApplicationRecord
  ACCEPTED_STATUS = ["studio", "live"]

  validates :title, presence: true, uniqueness:true
  validates :band_id, presence: true
  validates :status, presence: true, inclusion: ACCEPTED_STATUS
  validates :year, presence: true

    belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: "Band"

    has_many :tracks,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: "Track",
    dependent: :destroy
    
end

class Track < ApplicationRecord
  validates :title, :album_id, presence: true
  after_initialize :set_ord

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "Album"

  has_many :notes,
  primary_key: :id,
  foreign_key: :track_id,
  class_name: 'Note',
  dependent: :destroy

  has_one :band,        
  through: :album,
  source: :band

  def set_ord
    if self.ord.nil?
      alb = self.album_id
      new_al = Album.find(alb)
      al_songs = new_al.tracks
      al_songs.empty? ? self.ord = 1 : self.ord = (al_songs.count + 1)
      self.save
    end
  end
  
end

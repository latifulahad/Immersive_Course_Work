class ArtworkShare < ApplicationRecord
  validates :artwork_id, uniqueness: { scope: :viewer_id }
  validate :author_cannot_view

  belongs_to :artwork, primary_key: :id, foreign_key: :artwork_id, class_name: 'Artwork'
  belongs_to :viewer, primary_key: :id, foreign_key: :viewer_id, class_name: 'User'

  def author_cannot_view
    art = Artwork.find(self.artwork_id)
    self.errors[:viewer_id] << "cannot be of the user" if art.artist.id == self.viewer_id
  end

end
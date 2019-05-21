class Visit < ActiveRecord::Base
  validates :short_url_id, :user_id, presence: true

  def self.record_visit!(user, s_url)
    Visit.create!(user_id: user.id, short_url_id: s_url.id)
  end

  belongs_to :shortened_url,
  primary_key: :id,
  foreign_key: :short_url_id,
  class_name: 'ShortenedUrl'

  has_many :users,
  primary_key: :user_id,
  foreign_key: :id,
  class_name: 'User'
end
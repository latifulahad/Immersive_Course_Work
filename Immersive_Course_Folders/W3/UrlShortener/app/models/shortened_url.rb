class ShortenedUrl < ActiveRecord::Base
  validates :long_url, :submitter_id, presence: true

  def self.create_for_user_and_long_url!(user, long_url)
    ShortenedUrl.create!(
      submitter_id: user.id,
      long_url: long_url,
      short_url: ShortenedUrl.random_code
    )
  end

  def self.random_code
    loop do
      random_code = SecureRandom.urlsafe_base64(16)
      return random_code unless ShortenedUrl.exists?(short_url: random_code)
    end
  end

  belongs_to :submitter,
  primary_key: :id,
  foreign_key: :submitter_id,
  class_name: 'User'

  has_many :visitors,
  primary_key: :id,
  foreign_key: :short_url_id,
  class_name: 'Visit'

  def num_clicks
    visitors.count
  end

  def num_uniques
    a = visitors
    b = a.select('user_id').distinct
    b.count
  end

  def num_recent_uniques
    a = visitors
    b = a.select('user_id').where('created_at > ?', 10.minutes.ago)
    b.distinct
  end
end
class Tag < ActiveRecord::Base
  validates :topic_id, :short_url_id, :user_id, presence: true
  validates :short_url_id, uniqueness: { scope: :user_id }
end

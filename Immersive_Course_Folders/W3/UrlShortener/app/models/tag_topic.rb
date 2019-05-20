class TagTopic < ActiveRecord::Base
  validates :topic, presence: true
end

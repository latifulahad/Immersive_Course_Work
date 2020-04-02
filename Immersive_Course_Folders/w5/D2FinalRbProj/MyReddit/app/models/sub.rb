class Sub < ApplicationRecord
    validates :title, :description, :moderator, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :moderator,
    class_name: 'User'
    
    has_many :sub_posts,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: 'SubPost',
    dependent: :destroy

    has_many :posts,
    through: :sub_posts,
    source: :post
end
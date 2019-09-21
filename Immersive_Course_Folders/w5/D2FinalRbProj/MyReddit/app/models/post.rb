class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :author_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    
    has_many :subs,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: 'SubPost'

    has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Comment',
    dependent: :destroy
end
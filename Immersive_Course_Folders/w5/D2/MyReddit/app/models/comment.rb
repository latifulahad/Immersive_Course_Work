class Comment < ApplicationRecord
    validates :content, :author_id, :post_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    
    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'

    has_many :child_comments,
    primary_key: :id,
    foreign_key: :p_comment_id,
    class_name: 'Comment',
    dependent: :destroy

end
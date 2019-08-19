class SubPost < ApplicationRecord
validates :sub_id, :post_id, presence: true
validates :sub_id, uniqueness: { scope: :post_id }

    belongs_to :sub,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: 'Sub'
    
    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'
end
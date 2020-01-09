class Todo < ApplicationRecord
    validates :title, :body, presence: true
    validates :done, inclusion: { in: [true, false] }

    belongs_to :user

    has_many :steps,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: 'Step'
    
end
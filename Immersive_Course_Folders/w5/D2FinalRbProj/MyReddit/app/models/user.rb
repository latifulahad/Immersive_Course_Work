class User < ApplicationRecord
validates :name, presence: true
validates :password, presence: { minimun: 5, allow_nil: true }
validates :pass_digest, uniqueness: true
validates :email, presence: true, uniqueness: true

has_many :subs,
primary_key: :id,
foreign_key: :moderator,
class_name: 'Sub',
dependent: :destroy

has_many :posts,
primary_key: :id,
foreign_key: :author_id,
class_name: 'Post',
dependent: :destroy

has_many :comments,
primary_key: :id,
foreign_key: :author_id,
class_name: 'Comment',
dependent: :destroy

attr_reader :password

    def reset_session_tkn!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save
    end

    def password=(pass)
        @password = pass
        self.pass_digest = BCrypt::Password.create(pass)
        self.save!
    end

    def is_pass?(pass)
        resP = BCrypt::Password.new(self.pass_digest).is_password?(pass)
        if resP
            return true
        else
            return self.errors[:password] << "is incorrect"
        end
    end

end
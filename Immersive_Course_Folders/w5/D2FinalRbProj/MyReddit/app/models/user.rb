class User < ApplicationRecord
attr_reader :password

validates :name, presence: true
validates :password, presence: { minimun: 5, allow_nil: true }
validates :pass_digest, uniqueness: true
validates :email, presence: true, uniqueness: true

validate :check_pass, if: :prep_pass

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

    def check_pass
        self.errors[:password] << "is too SHORT!"  if self.password.length < 5
    end

    def reset_session_tkn!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save
    end

    def password=(pass)
        @password = pass
        self.pass_digest = BCrypt::Password.create(pass)
    end
    
    def prep_pass
        self.password
    end

    def is_pass?(pass)
        BCrypt::Password.new(self.pass_digest).is_password?(pass)
    end

end
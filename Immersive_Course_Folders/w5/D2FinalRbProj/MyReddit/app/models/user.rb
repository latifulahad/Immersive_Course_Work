class User < ApplicationRecord
attr_reader :password

validates :name, presence: true
validates :password, presence: { minimun: 5, allow_nil: true }
validates :pass_digest, uniqueness: true
validates :email, presence: true, uniqueness: true

before_create :check_pass

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
        if self.password
            self.errors[:password] << "is too SHORT!"  if self.password.length < 5
            raise("Password is too SHORT!") if self.password.length < 5
        else
            raise("Must enter a password with atleast 5 characters.")
        end
    end

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
        BCrypt::Password.new(self.pass_digest).is_password?(pass)
    end

end
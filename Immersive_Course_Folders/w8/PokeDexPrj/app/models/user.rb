class User < ApplicationRecord
    attr_reader :password

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :pass_digest, presence: true
    validates :password, presence: { minimum: 6, allow_nil: true }

    before_validation :ensure_session_token
    
    def password=(pass)
        @password = pass
        self.pass_digest = BCrypt::Password.create(pass)
    end

    def is_pass?(arg)
        BCrypt::Password.new(self.pass_digest).is_password?(arg)
    end
    
    def reset_session_tkn!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
    
end
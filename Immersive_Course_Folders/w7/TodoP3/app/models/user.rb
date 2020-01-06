class User < ApplicationRecord
    validates :username, presence: true
    validates :password, presence: { minimun: 5, allow_nil: true }
    validates :pass_digest, uniqueness: true
    validates :session_token, uniqueness: true

    after_initialize :setupUsr 
    
    attr_reader :password

    def setupUsr
        pass = self.password
        self.password=(pass) unless self.pass_digest.empty?
    end

    def reset_session_tkn!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
    end

    def password=(pass)
        @password = pass
        self.pass_digest = BCrypt::Password.create(pass)
        self.save!
    end

    def is_pass?(arg)
        BCrypt::Password.new(self.pass_digest).is_password?(arg)
    end
    
end
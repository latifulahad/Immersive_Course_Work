class User < ApplicationRecord
    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: { minimun: 5, allow_nil: true }
    validates :pass_digest, uniqueness: true

    after_initialize :setupUsr 
    
    has_many :todos,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Todo'

    def setupUsr
        pass = self.password
        self.password=(pass) if self.pass_digest.nil?
    end

    def reset_session_tkn!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
    end

    def password=(pass)
        @password = pass
        self.pass_digest = BCrypt::Password.create(pass)
        self.save
    end

    def is_pass?(arg)
        BCrypt::Password.new(self.pass_digest).is_password?(arg)
    end
    
end
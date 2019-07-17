class User < ApplicationRecord
validates :email, presence: true, uniqueness: true
validates :session_token, :password_digest, presence: true
validates :password, length: { minimum: 5, allow_nil: true } 

after_initialize :ensure_session_token
after_initialize :setup_pass

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token!
    token = SecureRandom::urlsafe_base64(16)
    
    while User.exists?(session_token: token) do
      token = SecureRandom::urlsafe_base64(16) 
    end

    token
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token!
    self.save!
  end

  def ensure_session_token
    self.session_token||= User.generate_session_token!
  end

  def setup_pass
    if self.password_digest.nil?
      initial_pass = self.password
      self.password = initial_pass
    else
      true 
    end
  end
  
end

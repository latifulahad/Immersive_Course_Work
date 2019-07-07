class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank!"}
  validates :password_digest, length: { minimum: 5, allow_nil: true }
  
  before_validation :ensure_session_token

  attr_reader :password

  def password=(password) #wrks
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token #wrks
    SecureRandom::urlsafe_base64(16) 
  end

  def ensure_session_token #wrks
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(usr_nm, passW) #wrks
    urs = User.find_by(username: usr_nm)
    return urs if urs && BCrypt::Password.new(urs.password_digest).is_password?(passW)
    nil
  end

  def reset_session_token! #wrks
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end

class User < ApplicationRecord
  validates :user_name, presence: true, uniqueness: true
  validates :password, presence: { minimum: 5, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, uniqueness: true

  before_validation :setup_instance

  attr_reader :password

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
    self.save
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def self.find_by_credentials(usr_n, pass)
    usr = User.find_by(user_name: usr_n)
    return nil if usr.nil?
    usr.is_password?(pass) ? usr : nil
  end

  private
  def setup_instance
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.password_digest.nil? ? self.help_digest : true
  end

  def help_digest
    pass = self.password
    self.password = pass
  end
end
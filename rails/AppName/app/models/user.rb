require 'SecureRandom'
require 'BCrypt'
class User < ApplicationRecord
  attr_reader :password
  before_validation :ensure_session_token
  validates :username, :session_token, presence: true
  validates :password, length:{minimum: 6, allow_nil: true}
  validates_presence_of :password_digest, message: "Password can't be blank"

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if BCrypt::Password.new(self.password_digest).is_password?(password)
    "Username or password is incorrect"
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


end

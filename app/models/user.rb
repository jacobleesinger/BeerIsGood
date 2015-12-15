class User < ActiveRecord::Base

# Validations

  validates :username, :email, :birthday, :password_digest, :session_token, presence: true

  validates :password, length: {minimum: 6, allow_nil: true}

# attrs

  attr_reader :password


# Associations

  has_many(
  :friendships,
  class_name: "Friendship",
  foreign_key: :user_id,
  primary_key: :id
  )

  has_many(
  :friends,
  through: :friendships,
  source: :friend
  )

  has_many(
  :reviews,
  class_name: "Review",
  foreign_key: :author_id,
  primary_key: :id
  )

  has_many (
  :beers,
  through: :reviews,
  source: :beer
  )

  has_many(
  :comments,
  class_name: "Comment",
  foreign_key: :author_id,
  primary_key: :id
  )

  has_many :toasts

# methods and stuff

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  return nil unless user && user.is_password?(password)
end


end

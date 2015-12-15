class User < ActiveRecord::Base

  # Validations

    validates :username, :email, :birthday, :password_digest, :session_token, :location,  presence: true

    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

    validates :password, length: {minimum: 6, allow_nil: true}
    validates_confirmation_of :password


    after_initialize :ensure_session_token

    validate :is_valid_birthday?

    def is_valid_birthday?
      if self.birthday > 21.years.ago
        errors.add(:birthday, "You must be over 21 to sign up for BeerIsGood")
      end
    end

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

    has_many(
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
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end

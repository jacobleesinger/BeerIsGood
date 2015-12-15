class User < ActiveRecord::Base

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

end

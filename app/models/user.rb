class User < ActiveRecord::Base
  has_many(
    :friendships,
    class_name: "Friendship",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
  :reviews,
  class_name: "Review",
  foreign_key: :author_id,
  primary_key: :id
  )

  has_many(
  :comments,
  class_name: "Comment",
  foreign_key: :author_id,
  primary_key: :id
  )

  has_many(
  :toasts,
  class_name: "Toast",
  foreign_key: :user_id,
  primary_key: :id
  )

end

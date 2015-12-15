class User < ActiveRecord::Base

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

  has_many :toasts

  has_many :beers, through: :reviews, source: :beer

end

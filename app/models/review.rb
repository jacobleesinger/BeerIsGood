class Review < ActiveRecord::Base
  
  belongs_to(
  :beer,
  class_name: "Beer",
  foreign_key: :beer_id,
  primary_key: :id
  )

  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id
  )

  has_many :comments
  has_many :toasts
end

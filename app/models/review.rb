class Review < ActiveRecord::Base
  validates :body, :rating, :beer_id, :author_id, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5]}

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

  has_many :comments, dependent: :destroy
  has_many :toasts, dependent: :destroy
end

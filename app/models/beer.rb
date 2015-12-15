class Beer < ActiveRecord::Base
  has_many(
  :reviews,
  class_name: "Review",
  foreign_key: :beer_id,
  primary_key: :id
  )
end

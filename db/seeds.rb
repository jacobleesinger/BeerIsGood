# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

beer_names = [Faker::Commerce.product_name, Faker::Hipster.word, Faker::Book.title]

Beer.create!(
name: "Pabst Blue Ribbon"
)

Beer.create!(
name: "Bud Light"
)

Beer.create!(
name: "Blue Moon Belgian White"
)

Beer.create!(
name: "Arrogant Bastard Ale"
)

User.create(username: "Guest", email: "Guest@guest.guest", password: "password", birthday: "01-01-1989", location: "San Francisco")

10.times do
  Beer.create(name: Faker::Commerce.product_name)
  Beer.create(name: Faker::Hipster.word)
  Beer.create(name: Faker::Book.title)
end

20.times do
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password", birthday: '01-01-1989', location: "San Francisco")
end

100.times do
  Review.create(author_id: Faker::Number.between(1, 21), beer_id: Faker::Number.between(1, 30), body: Faker::Hipster.paragraphs.first, rating: Faker::Number.between(1, 5) )
end

100.times do
  Comment.create(author_id: Faker::Number.between(1, 21), review_id:  Faker::Number.between(1, 100), body: Faker::Hipster.paragraph)
end

100.times do
  Toast.create(user_id: Faker::Number.between(1, 21), review_id: Faker::Number.between(1, 100))
end

Faker::Number.between(5, 10).times do
  Friendship.create(user_id: 1, friend_id: Faker::Number.between(2, 20))
end

Faker::Number.between(1, 5).times do
  Friendrequest.create(requester_id: 1, requested_id: Faker::Number.between(2, 20))
end

Faker::Number.between(1, 5).times do
  Friendrequest.create(requester_id: Faker::Number.between(2, 20), requested_id: 1 )
end

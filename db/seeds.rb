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


10.times do
  Beer.create(name: Faker::Commerce.product_name)
  Beer.create(name: Faker::Hipster.word)
  Beer.create(name: Faker::Book.title)
end

20.times do
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password", birthday: '01-01-1989', location: "San Francisco")
end

User.create(username: "Guest", email: "Guest@guest.guest", password: "password", birthday: "01-01-1989", location: "San Francisco")

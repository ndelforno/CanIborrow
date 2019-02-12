# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    password: "123456",
    password_confirmation: "123456"
Us
  )
end

10.times do
  Tool.create(
    name: Faker::Appliance.equipment,
    user: User.all.sample,
    description: Faker::Appliance.brand,
    price: 5,
    address: Faker::Address.full_address
  )
end

10.times do
  Reservation.create(
    tool: Tool.all.sample,
    user: User.all.sample,
    date: Faker::Date.forward(23),
    reservation_time_start: Faker::Time.forward(23, :morning),
    reservation_time_end: Faker::Time.backward(14, :evening)
  )
end

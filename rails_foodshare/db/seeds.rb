# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Company.destroy_all
Courier.destroy_all
Job.destroy_all



company_one = Company.create!(
  name: "Soderberg",
  email: "soderberg@email.com",
  phone: "0131 441 1122",
  address1: "4 West End Way",
  address2: "West End",
  address3: "Edinburgh",
  postcode: "EH1 1WE",
  lat: 55.951060,
  lng: -3.209982
)

company_two = Company.create!(
  name: "Cafe One",
  email: "cafe@email.com",
  phone: "0131 442 3344",
  address1: "5 High Road",
  address2: "Colinton",
  address3: "Edinburgh",
  postcode: "EH3 1WT",
  lat: 55.947250,
  lng: -3.191335
)

company_three = Company.create!(
  name: "Edinburgh Larder",
  email: "larder@email.com",
  phone: "0131 692 5555",
  address1: "15 Blackfriars Street",
  address2: "Royal Mile",
  address3: "Edinburgh",
  postcode: "EH1 1NB",
  lat: 55.949658,
  lng: -3.185613
)

courier_one = Courier.create!(
  first_name: "Joe",
  last_name: "Bloggs",
  phone: "0773526262"
)

courier_two = Courier.create!(
  first_name: "Jenny",
  last_name: "Bloggs",
  phone: "0131213434"
)

user_one = User.create!(
  email: 'company@test.com',
  password: 'password',
  password_confirmation: 'password',
  company_id: company_one.id
)

user_two = User.create!(
  email: 'courier@test.com',
  password: 'password',
  password_confirmation: 'password',
  courier_id: courier_one.id
)

job_one = Job.create!(
  company: company_one,
  courier: courier_two,
  item: "Bread",
  quantity: 5,
  instructions: "Bread available. Pick up between 3pm and 6pm.",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Supply"
)

job_two = Job.create!(
  company: company_two,
  courier: courier_one,
  item: "Butter",
  quantity: 2,
  instructions: "Butter available. Pick up between 3pm and 6pm.",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Supply"
)

job_three = Job.create!(
  company: company_one,
  courier: courier_one,
  item: "Bread",
  quantity: 5,
  instructions: "Bread needed. Please leave with reception.",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Demand"
)

job_four = Job.create!(
  company: company_two,
  courier: nil,
  item: "Bacon",
  quantity: 5,
  instructions: "Spare bacon, take today",
  from_date: Date.parse("2016-05-20"),
  to_date: Date.parse("2016-05-20"),
  category: "Supply"
)

Job.create!(
  company: company_three,
  courier: nil,
  item: "Coffee",
  quantity: 10,
  instructions: "Spare coffee for pickup with Dave",
  from_date: Date.parse("2016-05-24"),
  to_date: Date.parse("2016-05-24"),
  category: "Supply"
)

Job.create!(
  company: company_three,
  courier: nil,
  item: "Green beans",
  quantity: 50,
  instructions: "Beans needed for charity dinner",
  from_date: Date.parse("2016-05-24"),
  to_date: Date.parse("2016-05-24"),
  category: "Demand"
)

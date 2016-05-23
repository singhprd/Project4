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
  name: "Sodeberg",
  email: "sodeberg@email.com",
  phone: "0131 441 1122",
  address1: "4 West End Way",
  address2: "West End",
  address3: "Edinburgh",
  postcode: "EH1 1WE",
  lat: 1.09,
  lng: -0.12
)

company_two = Company.create!(
  name: "Cafe One",
  email: "cafe@email.com",
  phone: "0131 442 3344",
  address1: "5 High Road",
  address2: "Colinton",
  address3: "Edinburgh",
  postcode: "EH3 1WT",
  lat: 3.09,
  lng: -0.3456
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
  email: 'userOne@email.com',
  password: 'penny12',
  password_confirmation: 'penny12',
  company_id: company_one.id
)

user_two = User.create!(
  email: 'userTwo@email.com',
  password: 'penny13',
  password_confirmation: 'penny13',
  courier_id: courier_two.id
)

job_one = Job.create!(
  company: company_two,
  courier: courier_one,
  item: "Bread",
  quantity: 5,
  instructions: "Bread available. Pick up between 3pm and 6pm",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Supply",
  accepted: false
)

job_two = Job.create!(
  company: company_two,
  courier: courier_one,
  item: "Butter",
  quantity: 2,
  instructions: "Butter available. Pick up between 3pm and 6pm",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Supply",
  accepted: false
)

job_three = Job.create!(
  company: company_one,
  courier: courier_two,
  item: "Bread",
  quantity: 5,
  instructions: "Bread needed. Please leave with reception",
  from_date: Date.parse("2016-05-22"),
  to_date: Date.parse("2016-05-22"),
  category: "Demand",
  accepted: false
)

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has an item description" do 
    assert_equal("Carrots", jobs(:one).item)
  end

  test "has a quantity" do 
    assert_equal(4, jobs(:one).quantity)
  end
# check about setting fields
  # test "can set quantity" do 
  #   jobs(:two).setQuantity(3)
  #   assert_equal(3, jobs(:two).getQuantity)
  # end

  test "has instructions" do 
    assert_equal("Open until 10:00pm. Available for pick-up 6pm-8pm", jobs(:one).instructions)
  end

  test "has a company" do 
    assert_equal(companies(:one), jobs(:one).company)
  end

  test "can get own and unclaimed jobs for a courier" do
    assert_equal(
      [jobs(:one), jobs(:three)].sort,
      Job.jobs_for_user(users(:one)).sort
    )
  end

  test "can get own jobs for a company" do
    assert_equal(
      [jobs(:one), jobs(:two)].sort,
      Job.jobs_for_user(users(:two)).sort
    )
  end

  # test "getCompany method brings back company details" do 
  #   assert_equal({
  #         name: "Sodeberg",
  #         position: {
  #           lat: 1.0232,
  #           lng: -0.4567
  #         },
  #         contact_details: {
  #           email: "sodeberg@email.co.uk",
  #           phone: "0131 332 1111",
  #           address1: "3 WestEnd Place",
  #           address2: "West End",
  #           address3: "Edinburgh",
  #           postcode: "EH3 1RT"
  #         }
  #       }, jobs(:one).getCompanyDetails)
  # end

  test "can return a hash with info for courier view" do

    expected = {
      id: 1,
      item: "Carrots",
      quantity: 4,
      instructions: "Open until 10:00pm. Available for pick-up 6pm-8pm",
      from_date: "2016-05-22",
      to_date: "2016-05-22",
      category:  "Supply",
      courier_id: 1,
      company: {
        name: "Sodeberg",
        position: {
          lat: 1.0232,
          lng: -0.4567
        },
        contactDetails: {
          email: "sodeberg@email.co.uk",
          phone: "0131 332 1111",
          address1: "3 WestEnd Place",
          address2: "West End",
          address3: "Edinburgh",
          postcode: "EH3 1RT"
        }
      }
    }

    assert_equal(
     expected, jobs(:one).to_hash_for_courier
    )
  end

test "can return a hash with info for company view" do

    expected = {
      id: 1,
      item: "Carrots",
      quantity: 4,
      instructions: "Open until 10:00pm. Available for pick-up 6pm-8pm",
      from_date: "2016-05-22",
      to_date: "2016-05-22",
      category:  "Supply",
      courier: {
        first_name: "Jenny",
        last_name: "Bloggs",
        phone: "07712343455"
      }
    }

    assert_equal(
     expected, jobs(:one).to_hash_for_company
    )
  end


end

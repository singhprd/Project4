require 'test_helper'

class CourierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has first name" do 
    assert_equal("Jenny", couriers(:one).first_name)
  end

  test "has last name" do 
    assert_equal("Bloggs", couriers(:one).last_name)
  end

  test "has a phone number" do 
    assert_equal("07712343455", couriers(:one).phone)
  end

  test "can return a hash with info" do
    assert_equal(
      {
        first_name: "Jenny",
        last_name: "Bloggs",
        phone: "07712343455"
      },
      couriers(:one).to_hash
    )
  end

end

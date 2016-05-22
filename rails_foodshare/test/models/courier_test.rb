require 'test_helper'

class CourierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has first name" do 
    assert_equal("Jenny", couriers(:one).getFirstName)
  end

  test "has last name" do 
    assert_equal("Bloggs", couriers(:one).getLastName)
  end

  test "can get full name" do 
    assert_equal("Jenny Bloggs", couriers(:one).getFullName)
  end

  test "has a phone number" do 
    assert_equal(07712343455, couriers(:one).getPhoneNumber)
  end

end

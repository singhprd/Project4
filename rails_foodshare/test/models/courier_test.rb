require 'test_helper'

class CourierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has first name" do 
    assert_equal("Jenny", couriers(:one).getFirstName)
  end
end

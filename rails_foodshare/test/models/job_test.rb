require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has an item description" do 
    assert_equal("Carrots", jobs(:one).getItem)
  end

end

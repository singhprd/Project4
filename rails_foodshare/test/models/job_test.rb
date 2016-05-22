require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has an item description" do 
    assert_equal("Carrots", jobs(:one).getItem)
  end

  test "has a quantity" do 
    assert_equal(4, jobs(:one).getQuantity)
  end
# check about setting fields
  # test "can set quantity" do 
  #   jobs(:two).setQuantity(3)
  #   assert_equal(3, jobs(:two).getQuantity)
  # end

  test "has instructions" do 
    assert_equal("Open until 10:00pm. Available for pick-up 6pm-8pm", jobs(:one).getInstructions)
  end

  test "has a company id" do 
    assert_equal(1, jobs(:one).getCompanyId)
  end

end

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has a name" do 
    assert_equal("Sodeberg", companies(:one).getName)
  end

  test "has an email" do 
    assert_equal("sodeberg@email.co.uk", companies(:one).getEmail)
  end


end

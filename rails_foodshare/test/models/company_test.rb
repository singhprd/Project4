require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has a name" do 
    assert_equal("Sodeberg", companies(:one).name)
  end

  test "has an email" do 
    assert_equal("sodeberg@email.co.uk", companies(:one).email)
  end

  test "has phone number" do 
    assert_equal("0131 332 1111", companies(:one).phone)
  end

  test "has address line 1" do
    assert_equal("3 WestEnd Place", companies(:one).address1)
  end

  test "can return full address" do
    assert_equal("3 WestEnd Place, West End, Edinburgh, EH3 1RT", companies(:one).getFullAddress)
  end

  test "can return just lat" do 
    assert_equal(1.0232, companies(:one).lat)
  end

  test "can return both lat and lng" do 
    assert_equal({lat: 1.0232, lng: -0.4567}, companies(:one).getLocation)
  end



end

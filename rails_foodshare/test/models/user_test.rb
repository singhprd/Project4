require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "has email" do
    assert_equal("jbloggs@email.com", users(:one).email)
  end

  # test "has password" do
  #   assert_equal("bloggs1", users(:one).password)
  # end
end

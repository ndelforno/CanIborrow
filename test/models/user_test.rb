require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def test_user_can_be_created
    user = build(:user)

    assert user.valid?
  end

  def test_full_name
    user = create(:user, first_name: "nick", last_name:"delfo")
    actual = user.full_name
    expected = "nick delfo"
    assert_equal(expected,actual)
  end

end

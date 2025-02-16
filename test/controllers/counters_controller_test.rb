require "test_helper"

class CountersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get counters_show_url
    assert_response :success
  end

  test "should get update" do
    get counters_update_url
    assert_response :success
  end
end

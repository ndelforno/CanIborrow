class ApplicationController < ActionController::Base

private

def current_user
  @current_user ||= User.find(session[:user_id]) if session[:user_id]
end

def set_new_user
  @user = User.new
end


helper_method :current_user, :set_new_user

end

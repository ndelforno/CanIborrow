class SessionsController < ApplicationController

  def new
    @user = User.new
    flash[:previous_page] = request.referer
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      return render js: "window.location = '#{request.referrer.present? ? request.referrer : root_path}'"
    else
      respond_to do |format|
       format.html { render 'sessions/form'}
       format.json { render :json => { :error => @user.errors.full_messages }, :status => 500 }
       format.js
      end
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to tools_path, notice: "logged out!"
  end
end

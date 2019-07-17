class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @usr = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @usr
      log_in_user!(@usr)
      redirect_to user_url(@usr)
    else
      redirect_to new_session_url
    end
  end
  
  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

end

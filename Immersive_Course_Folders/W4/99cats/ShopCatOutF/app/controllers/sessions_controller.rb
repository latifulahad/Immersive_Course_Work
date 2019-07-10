class SessionsController < ApplicationController
  before_action :restrict_usr!, only: [:new, :create]

  def new
    render :new
  end

  def create
    usr = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    if usr
      log_in_usr!(usr)
      redirect_to cats_url
    else
      redirect_to new_session_url
    end
  end
  
  def destroy
    current_usr.reset_session_token! 
    session[:session_token] = nil
    redirect_to new_session_url
  end

end
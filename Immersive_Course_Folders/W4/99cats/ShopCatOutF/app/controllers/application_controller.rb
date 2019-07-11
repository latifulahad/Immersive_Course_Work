class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_usr
  helper_method :log_in_usr!
  helper_method :check_usr_bool?

  private
  def current_usr
    return nil unless session[:session_token]
    @current_usr ||= User.find_by(session_token: session[:session_token])
  end

  def log_in_usr!(usr)
      usr.reset_session_token!
      session[:session_token] = usr.session_token
  end

  def restrict_usr!
    redirect_to cats_url if current_usr
  end  

  def check_usr!
    wanted_cat = Cat.find(params[:id])
    redirect_to cats_url unless current_usr.id == wanted_cat.user_id
  end

  def check_usr_bool?
    wanted_cat = Cat.find(params[:id])
    current_usr.id == wanted_cat.user_id
  end
end

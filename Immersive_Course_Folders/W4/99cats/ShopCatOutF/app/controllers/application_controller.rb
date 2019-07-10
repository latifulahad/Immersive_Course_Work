class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_usr
  helper_method :log_in_usr

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

end

class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception

    helper_method :current_user, :login_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login_user(usr)
        usr.reset_session_tkn!
        session[:session_token] = usr.session_token
    end

end

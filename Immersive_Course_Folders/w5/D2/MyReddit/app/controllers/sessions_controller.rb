class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        user = User.find_by(email: params[:user][:email])
        if user
            log_in_user!(user)
            redirect_to subs_url
        else
            redirect :new
        end
    end

    def destroy
        current_user.reset_session_tkn!
        session[:session_token] = nil
        redirect_to new_session_url
    end

    private
    
    def wanted_params
        params[:user].permit(:email, :password)
    end
end 
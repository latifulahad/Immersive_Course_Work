class SessionsController < ApplicationController
    
    def new
        render :new
    end

    def create
        usr = User.find_by(username: params[:user][:username])
        if usr
            if(usr.is_pass?(params[:user][:password]))
                login_user(usr)
                redirect_to root_url
            end
        else
            redirect_to new_session_url
        end
    end

    def destroy
        current_user.reset_session_tkn!
        session[:session_token] = nil
        redirect_to new_session_url
    end
    
end
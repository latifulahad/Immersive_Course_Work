class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        usr = User.find_by(email: params[:user][:email])
        if usr
            usr.reset_session_tkn!
            session[:session_token] = usr.session_token
            #WE WILL NEED TO SETUP 4 ASYNC TYPE INTERACTION
        else
           redirect_to new_api_session_url 
        end
    end

    def destroy
        current_user.reset_session_tkn!
        session[:session_token] = nil
        redirect_to new_api_session_url
    end

    private

    def wntParams
        params.require(:user).permit(:email, :password)
    end
    
end
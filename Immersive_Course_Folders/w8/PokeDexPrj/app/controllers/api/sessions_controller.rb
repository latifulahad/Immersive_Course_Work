class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        usr = User.find_by(email: params[:user][:email])
        @user = usr.is_pass?(params[:user][:password]) ? usr : nil

        if @user
            @user.reset_session_tkn!
            session[:session_token] = user.session_token
            render :show
        else
           render json: user.errors.full_messages, status: 422 
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
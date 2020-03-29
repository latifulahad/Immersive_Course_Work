class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by(email: params[:user][:email])
        
        if @user.is_pass?(params[:user][:password])
            log_in_user!(@user)

            respond_to do |format|
                format.json { render :show }	
	        end
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
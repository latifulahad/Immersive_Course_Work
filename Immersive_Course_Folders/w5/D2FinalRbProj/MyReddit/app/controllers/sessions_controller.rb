class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by(email: params[:user][:email]) #issue here!!!
        
        if @user.is_pass?(params[:user][:password])
            log_in_user!(@user)

            respond_to do |format|
                format.json { render :show }	
            end
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        current_user.reset_session_tkn!
        session[:session_token] = nil
        
        respond_to do |format|
            format.json { render json: { resP: "done" } }	
	    end
    end

    private
    
    def wanted_params
        params[:user].permit(:email, :password)
    end
end 
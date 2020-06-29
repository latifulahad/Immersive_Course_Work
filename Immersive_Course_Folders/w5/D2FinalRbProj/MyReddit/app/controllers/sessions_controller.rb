class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by(email: params[:user][:email])
        pass = params[:user][:password]

        if @user
            if @user.is_pass?(pass)
                log_in_user!(@user)

                respond_to do |format|
                    format.json { render :show }	
                end
            else
                render json: { error: "Password is incorrect" }    
            end
        else
            render json: { error: "Screen name is incorrect" }
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
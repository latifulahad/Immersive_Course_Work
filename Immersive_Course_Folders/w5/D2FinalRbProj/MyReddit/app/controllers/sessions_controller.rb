class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by(email: params[:user][:email]) #issue here!!!
        pass = params[:user][:password]

        if @user
            if @user.is_pass?(pass)
                log_in_user!(@user)

                respond_to do |format|
                    format.json { render :show }	
                end
            else
                respond_to do |format|
                    format.json { render @user.errors.full_messages, status: 422 }	
                end
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
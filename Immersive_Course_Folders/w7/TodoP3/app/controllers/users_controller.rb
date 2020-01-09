class UsersController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end

    def create
        @usr = User.new(wanted_params)
        if @usr
            login_user(@usr)
            redirect_to root_url
        else
            redirect_to new_user_url
        end
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @usr = User.find_by(username: params[:user][:username])
        @usr.update_attributes(wanted_params)
        redirect_to root_url(@usr)
    end

    def destroy
        @usr = User.find(params[:id])
        @usr.delete
        redirect_to new_session_url     
    end

    private

    def wanted_params
        params.require(:user).permit(:username, :password)
    end
    
end
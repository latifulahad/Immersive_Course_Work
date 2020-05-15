class UsersController < ApplicationController
    def new
        @usr = User.new
        render :new
    end

    def show
        @usr = User.find(params[:id])
        
        respond_to do |format|
            format.json { render :show }
        end
    end

    def create
        @usr = User.new(wanted_params)
        
        if @usr
            log_in_user!(@usr)
            
            respond_to do |format|
                format.json { render :show }
            end
        end

    end

    def edit
        @usr = User.find(params[:id])
        render :edit
    end

    def update
        @usr = User.find_by(email: params[:user][:email])
        @usr.update_attributes(wanted_params)
        redirect_to user_url(@usr)
    end

    def destroy
    end

    private

    def wanted_params
        params.require(:user).permit(:name, :email, :password)
    end
end 
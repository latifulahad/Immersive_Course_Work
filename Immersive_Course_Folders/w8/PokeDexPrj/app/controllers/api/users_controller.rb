class Api::UsersController < ApplicationController

    def new
        render :new
    end

    def create
        @usr = User.new(wntParams)
        if @usr.save!
            # redirect_to user_url(@usr)
        else
            render json: @usr.errors.full_messages, status: 422
        end
    end

    def show
        @usr = User.find(params[:id])
        render :show
    end

    def update
        @usr = User.find(params[:id])
        if(@usr.is_pass?(params[:user][:password]))
            @usr.update_attributes(wntParams)
            render :show
        else 
            render json: @usr.errors.full_messages, status: 422
        end
    end
    
    def delete
    end

    private

    def wntParams
        params.require(:user).permit(:name, :email, :password)
    end

end

class UsersController < ApplicationController

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

    def delete
    end

    private

    def wntParams
        params.require(:user).permit(:name, :email, :password)
    end

end

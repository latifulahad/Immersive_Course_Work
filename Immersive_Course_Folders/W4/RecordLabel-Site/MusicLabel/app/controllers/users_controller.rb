class UsersController < ApplicationController

  def new
    render :new
  end

  def show
    @usr = User.find(params[:id])
    render :show
  end

  def create
    @usr = User.new(wanted_params)
    if @usr.save!
      log_in_user!(@usr)
      # redirect_to user_url(@usr)  #TESTING PHASE
      redirect_to bands_url
    else
      redirect_to new_user_url
    end
  end

  private

  def wanted_params
    params.require(:user).permit(:email, :password)
  end
end
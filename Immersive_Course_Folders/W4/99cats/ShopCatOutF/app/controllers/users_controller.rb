class UsersController < ApplicationController
  before_action :restrict_usr!

  def show
    render :show
  end

  def new
    render :new
  end

  def create
    @usr = User.new(wanted_params)
    if @usr
      log_in_usr!(@usr)
      redirect_to cats_url
    else
      redirect_to new_user_url
    end
  end

  private

  def wanted_params
    params.require(:user).permit(:user_name, :password)
  end
end
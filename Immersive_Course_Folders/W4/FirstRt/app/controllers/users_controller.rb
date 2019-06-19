class UsersController < ApplicationController

  def index
    ans = User.all
    render json: ans
  end

  def show
    wanted_obj = User.find(params[:id])

    render json: wanted_obj
  end

  def create
    n_user = User.new(wanted_params)
    
    if n_user.save!
      render json: n_user
    else
      render json: n_user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    wanted_obj = User.find(params[:id])

    if wanted_obj.update(wanted_params)
      render json: wanted_obj
    else
      render json: wanted_obj.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    wanted_obj = User.find(params[:id])
    
    if wanted_obj.destroy
      render json wanted_obj
    else
      render plain: "Cannot execute, too significant(data)! "
    end
  end
  
  private

  def wanted_params
    params.require(:user).permit(:name, :email)
  end

end
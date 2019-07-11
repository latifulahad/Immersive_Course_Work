class CatsController < ApplicationController
  before_action :check_usr!, only: [:edit, :update]

  def index
    @cats = Cat.all
    render :index 
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new 
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def create
    @cat = Cat.new(wanted_params)

    if @cat.save!
      redirect_to cat_url(@cat)
    else
      render :new
    end
  end

  def update
    @cat = Cat.find_by(id: params[:id])

    if @cat.update_attributes(wanted_params)
      redirect_to cats_url(@cat)
    else
      render :edit
    end
  end

  private
  
  def wanted_params
    params.require(:cat).permit(:name, :sex, :birth_date, :color, :description, :user_id)
  end

end
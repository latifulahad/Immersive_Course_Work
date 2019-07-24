class BandsController < ApplicationController
before_action :restrict_non_logged_usr, only: [:index, :new, :edit]

  def show
    @band = Band.find(params[:id]) 
    render :show
  end

  def new
    @band = Band.new
    render :new
  end

  def index
    @bands = Band.all
    render :index
  end

  def create
    @band = Band.create(wanted_params)
    if @band
      redirect_to band_url(@band)
    else
      render json: Band.errors.full_messages , status: :unprocessable_entity
    end
  end

  def destroy
    band = Band.find(params[:id])
    band.nil? ? true : band.destroy
    redirect_to bands_url
  end

  def edit
    @band = Band.find(params[:id])
    render :edit
  end

  def update
    @band = Band.find(params[:id])
    if @band
      @band.update(wanted_params)
      redirect_to band_url(@band)
    else
      render json: Band.errors.full_messages , status: :unprocessable_entity
    end
  end

  private

  def wanted_params
    params.require(:band).permit(:name)
  end
end

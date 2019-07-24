class TracksController < ApplicationController

  def show
    @track = Track.find(params[:id]) 
    render :show
  end

  def new
    @album = Album.find(params[:album_id])
    render :new
  end

  def index
    @track = Track.all
    render :index
  end

  def create
    @track = Track.new(wanted_params)
    @album = @track.album
    if @track
      redirect_to album_url(@album)
    else
      render json: Track.errors.full_messages , status: :unprocessable_entity
    end
  end

  def destroy
    track = Track.find(params[:id])
    album = track.album 
    track.destroy
    redirect_to album_url(album)
  end

  def edit
    @track = Track.find(params[:id])
    @album = @track.album
    render :edit
  end

  def update
    track = Track.find(params[:id])
    @album = track.album
    
    if track
      track.update(wanted_params)
      redirect_to album_url(@album)
    else
      render json: Track.errors.full_messages , status: :unprocessable_entity
    end
  end

  private

  def wanted_params
    params.require(:track).permit(:title, :album_id, :ord, :track_type)
  end
end 

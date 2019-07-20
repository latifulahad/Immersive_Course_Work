class AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id]) 
    render :show
  end

  def new
    if params.has_key?(:band_id)
      @band = Band.find(params[:band_id])
      @album = Album.new
      render :new
    else
      @album = Album.new
      render :new
    end
  end

  def index
    @albums = Album.all
    render :index
  end

  def create
    new_p = wanted_params
    new_p[:album][:year] = new_p[:album][:year].to_i
    @album = Album.create(new_p)
    if @album
      redirect_to album_url(@album)
    else
      redirect_to new_album_url
    end
  end

  def destroy
    album = Album.find(params[:id])
    band = album.band 
    album.destroy
    redirect_to band_url(band)
  end

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def update
    @album = Album.find(params[:id])
    
    if @album
      @album.update(wanted_params)
      redirect_to album_url(@album)
    else
      redirect_to edit_album_url
    end
  end

  private

  def wanted_params
    params.require(:album).permit(:title, :year, :band_id)
  end
end


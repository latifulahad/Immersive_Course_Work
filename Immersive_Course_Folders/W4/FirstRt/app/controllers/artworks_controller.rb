class ArtworksController < ApplicationController

  def show
    render json: Artwork.find(params[:id]) 
  end

  def index
    # if params[:user_id]
      usr, ans = User.find(params[:user_id]), []
      ans << usr.artworks.concat(usr.shared_artworks)
      render json: ans.flatten
    # else
    #   ans = Artwork.all
    #   render json: ans
    # end
  end 

  def update
    picture = Artwork.find(params[:id])
    if picture.update(wanted_params)
      render json: picture
    else
      render json: picture.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    new_pic = Artwork.new(wanted_params)
    if new_pic.save!
      render json: new_pic
    else
      render json: new_pic.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    bye_pic = Artwork.destroy(params[:id])
    if bye_pic
      render json: bye_pic
    else
      render json: bye_pic.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def wanted_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end
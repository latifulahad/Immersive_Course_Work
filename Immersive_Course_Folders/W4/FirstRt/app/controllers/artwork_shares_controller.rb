class ArtworkSharesController < ApplicationController
  def create
    new_art_share = ArtworkShare.new(wannted_params)
    if new_art_share.save!
      render json: new_art_share
    else
     render json: new_art_share.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    desired_obj = ArtworkShare.find(params[:id])
    if desired_obj.destroy
      render json: desired_obj
    else
      render json: desired_obj.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def wannted_params
    params.require(:artwork_share).permit(:viewer_id, :artwork_id)
  end
end
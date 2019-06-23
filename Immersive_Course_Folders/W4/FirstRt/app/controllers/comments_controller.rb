class CommentsController < ApplicationController
  
  def index
    if wanted_params[:artist_id]
      ans = Comment.where(artist_id: wanted_params[:artist_id])
    elsif wanted_params[:artwork_id]
      ans = Comment.where(artwork_id: wanted_params[:artwork_id])
    end

    render json: ans
  end

  def create
    ans = Comment.new(wanted_params)
    if ans.save!
      render json: ans
    else
      render json: ans.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    ans = Comment.find(params[:id])
    if ans.destroy
      render json: ans
    else
      render json: ans.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def wanted_params
    params.require(:comment).permit(:artist_id, :artwork_id, :body)
  end
end
class CatRentalRequestsController < ApplicationController
  
  def new
    render :new
  end

  def show
    @req = CatRentalRequest.find(params[:id])
    redirect_to cat_url(@req.cat_id) 
  end

  def create
    @req = CatRentalRequest.new(wanted_params)
    if @req.save!
      redirect_to cat_rental_request_url(@req)
    else
      redirect_to cats_url
    end
  end

  def approve
    ans = CatRentalRequest.find(params[:id])
    ans.approve!
  end

  def deny
    ans = CatRentalRequest.find(params[:id])
    ans.deny!
  end

  private

  def wanted_params
    params.require(:req).permit(:cat_id, :start_date, :end_date)
  end
end
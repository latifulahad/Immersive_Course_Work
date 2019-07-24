class NotesController < ApplicationController

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def new
    @note = Note.new
    render :new
  end

  def create
    nt = Note.create(wanted_params)
    if nt
      trk = nt.track
      redirect_to note_url(trk)
    else
      redirect_to new_note_url
    end
  end

  def edit
    @note = Note.find(params[:id])
    render :edit 
  end

  def update
    nt = Note.find(params[:id])
    if nt 
      nt.update(wanted_params)
    else
      redirect_to albums_url
    end
  end

  def destroy
    nt = Note.find(params[:id])
    band = nt.track.band
    nt.destroy
    redirect_to band_url(band)
  end
  private

  def wanted_params
    params.require(:note).permit(:user_id, :track_id, :opinion)
  end
end

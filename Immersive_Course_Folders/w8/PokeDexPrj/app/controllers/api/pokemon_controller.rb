class Api::PokemonController < ApplicationController
    
    def show
        @pokeMon = Pokemon.find(params[:id])
        render :show
    end
    
    def index
        @pokeMon = Pokemon.all
        render :index
    end

    def create
        @pokeMon = Pokemon.new(wntParams)
        
        if @pokeMon.save
            render :show
        else
            render json: @pokeMon.errors.full_messages, status: 422
        end
    end

    private

    def wntParams
        params.require(:pokemon).permit(:image_url, :attack, :defense, :name, :poke_type, moves: [])
    end
end
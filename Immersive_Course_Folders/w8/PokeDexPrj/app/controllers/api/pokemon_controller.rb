class Api::PokemonController < ApplicationController
    
    def show
        @pokeMon = Pokemon.find(params[:id])
        render :show
    end
    
    def index
        @pokeMon = Pokemon.all
        render :index
    end
end
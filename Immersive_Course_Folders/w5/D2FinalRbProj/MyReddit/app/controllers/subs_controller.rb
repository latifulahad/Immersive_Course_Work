class SubsController < ApplicationController
    
    def index
        @subs = Sub.all

        respond_to do |format|
            format.json { render :index }	
	    end
    
    end

    def new
        @sub = Sub.new
        render :new
    end

    def show
        @sub = Sub.find(params[:id])
        @author = @sub.author.name

        respond_to do |format|
            format.json { render :show }
        end
    end

    def create
        @sub = Sub.new(wanted_params)
        if @sub
            redirect_to sub_url(@sub)
        else
            redirect_to new_sub_url
        end
    end

    def edit
        @sub = Sub.find(params[:id])
        render :edit
    end

    def update
        @sub = Sub.find_by(moderator: params[:sub][:moderator])
        @sub.update_attributes(wanted_params)
        redirect_to sub_url(@sub)
    end

    def destroy
    end

    private

    def wanted_params
        params.require(:sub).permit(:title, :description, :moderator)
    end
end
class UsersController < ApplicationController
    def new
        @usr = User.new
        render :new
    end

    def show
        @usr = User.find(params[:id])
        
        if params[:cond]
            respond_to do |format|
                format.json { render :other_show }
            end
        else
            respond_to do |format|
                format.json { render :show }
            end 
        end
    end

    def create
        @usr = User.new(wanted_params)

        if @usr.valid?
            @usr.save
            log_in_user!(@usr)
            
            respond_to do |format|
                format.json { render :show }
            end
        else
            render json: { error: "#{@usr.errors.full_messages}" }
        end

    end

    def edit
        @usr = User.find(params[:id])
        render :edit
    end

    def update
        @usr = User.find(params[:id])
        @usr.password = params[:user][:newPass] if @usr.is_pass?(params[:user][:password])
        @usr.save
        
        respond_to do |format|
            format.json { render :show }
        end
    end

    def destroy
    end

    private

    def wanted_params
        params.require(:user).permit(:name, :email, :password, :newPass)
    end
end 
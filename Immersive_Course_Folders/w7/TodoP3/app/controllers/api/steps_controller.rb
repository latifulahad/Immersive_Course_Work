class Api::StepsController < ApplicationController 
    
    def index
       steps = Todo.find(params[:todo_id]).steps
       render json: steps
    end
    
    def create
        step = Step.new(wntedParams)
        if step.save!
            render json: step
        else
            render json: step.errors.full_messages, status: 422
        end
    end
    
    def update
        step = Step.find(params[:id])
        step.update(wntedParams)
        render json: step
    end

    def destroy
        step = Step.find(params[:id])
        if(step)  
            step.delete
            render json: step
        else 
            render text: "Step is not present"
        end
    end

    private

    def wntedParams
        params.require(:step).permit(:todo_id, :title, :done)
    end

end
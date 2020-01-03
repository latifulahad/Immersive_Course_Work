class Api::TodosController < ApplicationController 

    def show
        render json: Todo.find(params[:id])
    end

    def index
        render json: Todo.all
    end

    def create
        @todo = Todo.new(wanted_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update  
        @wntedTodo = Todo.find(params[:id])
        @wntedTodo.update(wanted_params)
        
        render json: @wntedTodo
    end

    def destroy
        @todo = Todo.find(params[:id])
        if @todo
            @todo.delete
            render json: @todo
        else
            render text: "Todo is not present"
        end
    end

    private

    def wanted_params
        params.require(:todo).permit(:id, :title, :body, :done) 
    end
end
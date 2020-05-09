class CommentsController < ApplicationController
    def index
        post = Post.find(params[:post]);
        @comments = post.comments.where(p_comment_id: nil);
        if post
            respond_to do |format|
                format.json { render :index }
            end
        else
            respond_to do |format|
                format.json { render json: post.errors.full_messages, status: 422 }
            end
        end
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def new
        @post = Post.find(params[:post_id])
        render :new
    end

    def create
        @comment = Comment.new(wanted_params)
        if @comment.save!
            respond_to do |format|
                format.json { render :show }
            end
        else
            respond_to do |format|
                format.json { render json: @comment.errors.full_messages, status: 422 } 
            end
        end
    end

    private

    def wanted_params
        params[:comment].permit(:post_id, :author_id, :content, :p_comment_id)
    end
end


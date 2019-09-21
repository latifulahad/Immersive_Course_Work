class CommentsController < ApplicationController
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
            redirect_to post_url(@comment.post_id)
        else
            redirect_to subs_url
        end
    end

    private

    def wanted_params
        params[:comment].permit(:post_id, :author_id, :content, :p_comment_id)
    end
end


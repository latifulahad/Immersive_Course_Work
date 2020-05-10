class CommentsController < ApplicationController
    def index
        post, parentCmt = nil
        if params[:post]
            post = Post.find(params[:post])
        end
        if params[:pCmt]
            parentCmt = Comment.find(params[:pCmt])
        end
        @athrName = []
            if parentCmt
                parentCmt.child_comments.each { |cmt| @athrName.push(cmt.author.name) }
            end
        
        @comments = post.comments.where(p_comment_id: nil) if post
        
        if post
            respond_to do |format|
                format.json { render :index }
            end
        elsif parentCmt
            respond_to do |format|
                format.json { render :athr_nms }
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


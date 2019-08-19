class PostsController < ApplicationController

    def new
        @post = Post.new
        render :new
    end

    def show
        @post = Post.find(params[:id])
        @all_comments = @post.comments.includes(:author)
        render :show
    end

    def create
        @post = Post.new(wanted_params)
        @post.author_id = current_user.id

        if @post.save!
            redirect_to post_url(@post)
        else
            redirect_to subs_url
        end
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = Post.find(params[:id])
        @post.update_attributes(wanted_params)
        redirect_to sub_post_url(@post)
    end

    def destroy
        @post = Post.find(params[:id])
        redirect_to sub_url(@post.sub_id)
        @post.destroy
    end

    private

    def wanted_params
        params.require(:post).permit(:title, :content, :link, :author_id, sub_ids: [])
    end
end
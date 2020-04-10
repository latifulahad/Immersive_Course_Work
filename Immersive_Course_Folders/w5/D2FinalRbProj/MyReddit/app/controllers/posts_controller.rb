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
            @sbPost = SubPost.new(post_id: @post.id, sub_id: params[:post][:link].to_i)
            @sbPost.save!
            
            respond_to do |format|
                format.json { render :show }
            end
        else
            respond_to do |format|
                format.json { render json: @post.errors.full_messages, status: 422 }
            end
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
        @post.delete

        respond_to do |format|
            format.json { render json: { id: @post.id } }
        end
    end

    private

    def wanted_params
        params.require(:post).permit(:title, :content, :link, :author_id, sub_ids: [])
    end
end
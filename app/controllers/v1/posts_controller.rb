class V1::PostsController < ApplicationController
  def index
    @posts = Post.all

    render json: @posts, status: :ok
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: { error: "Cannot create post" }, status: 400
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render json: @post, status: :ok
    else
      render json: { error: "No post where found" }, status: :not_found
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render json: @post, status: :ok
    else
      render json: { error: "No post where found" }, status: :not_found
    end
  end

  private

  def post_params
    params.require(:post).permit(:name, :detail)
  end
end

class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      @errors = @comment.errors.full_messaages
      render json: @errors, status: 400
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :review_id, :body)
  end

end

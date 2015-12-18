class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def index
    @comments = Comment.all
    render json: @comments
  end

end

class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @user = User.find_by_id(@review.author_id)
      render json: @review
    else
      @errors = {errors: [@review.errors.full_messages]}
      render json: @errors
    end
  end

  def update
p params
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render json: @review
    else
      @errors = {errors: [@review.errors.full_messages]}
      render json: @errors
    end
  end

  def destroy
    review = Review.find(params[:id])

    @user = review.author

    review.destroy!


    render json: Review.all
  end


  private

  def review_params
    params.require(:review).permit(:author_id, :beer_id, :body, :rating, :id)
  end
end

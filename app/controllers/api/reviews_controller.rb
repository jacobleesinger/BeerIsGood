class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      @errors = @review.errors.full_messages
      render json: @errors , status: 400
    end
  end

  def update
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

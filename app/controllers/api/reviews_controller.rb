class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      @user = User.find_by_id(@review.author_id)
      redirect_to api_user_url(@user.id)
    else
      @errors = {errors: ["Error. Please try again."]}
      render json: @errors
    end

  end

  def destroy
    review = Review.find(params[:id])
    user_id = review.author_id
    review.destroy
    redirect_to api_user_url(user_id)

  end


  private

  def review_params
    params.require(:review).permit(:author_id, :beer_id, :body, :rating, :id)
  end
end

class Api::ToastsController < ApplicationController
  def show
    @toast = Toast.find(params[:id])
    render json: @toast
  end

  def index
    @toasts = Toast.all
    render json: @toasts
  end

  def create
    @toast = Toast.new(toast_params)
    if @toast.save
      render json: @toast
    else
      @errors = @toast.errors.full_messaages
      render json: @errors, status: 400
    end

  end

  private

  def toast_params
    params.require(:toast).permit(:user_id, :review_id)
  end

end

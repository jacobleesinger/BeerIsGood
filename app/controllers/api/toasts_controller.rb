class Api::ToastsController < ApplicationController
  def show
    @toast = Toast.find(params[:id])
    render json: @toast
  end

  def index
    @toasts = Toast.all
    render json: @toasts
  end

end

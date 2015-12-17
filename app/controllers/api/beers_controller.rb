class Api::BeersController < ApplicationController
  def show
    @beer = Beer.find(params[:id])
    render json: @beer
  end
  
end

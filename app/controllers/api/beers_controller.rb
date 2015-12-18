class Api::BeersController < ApplicationController
  def show
    @beer = Beer.find(params[:id])
    render json: @beer
  end

  def index
    @beers = Beer.all
    render json: @beers
  end

end

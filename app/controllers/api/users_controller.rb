class Api::UsersController < ApplicationController
  def show
    @guest = guest.find(params[:id])
  end
end

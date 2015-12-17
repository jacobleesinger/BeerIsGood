class Api::UsersController < ApplicationController
  def show
    @guest = guest.find(params[:id])
  end

  def create
    @user = User.create!(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :password_confirmation,
      :location,
      :email,
      :birthday
    )
  end
end

class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors, status: 400
    end

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

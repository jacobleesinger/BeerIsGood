class Api::UsersController < ApplicationController
  def show
    @guest = guest.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user
    else
      debugger;
      @errors = @user.errors.full_messages
      render json: @errors
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

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      sign_in(@user)
      render json: @user
    else
      @errors = {errors: ["Error. Please try again."]}
      render json: @errors
    end
  end

  def show
    render json: current_user
  end

  def destroy

    @user = current_user
    sign_out
    render json: @user
  end
end

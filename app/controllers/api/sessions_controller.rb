class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      sign_in(@user)
      redirect_to api_user_url(@user.id)
    else
      @errors = {errors: ["Invalid username/password. Please Try Again."]}
      render json: @errors, status: 400
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

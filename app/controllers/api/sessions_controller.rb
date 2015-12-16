class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if user
      sign_in(user)
      redirect_to staticpages_url
    else
      flash[:errors] = ["invalid username/password"]
      render :new
    end
  end

  def destroy
  end
end

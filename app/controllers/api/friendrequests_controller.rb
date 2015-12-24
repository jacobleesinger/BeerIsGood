class Api::FriendrequestsController < ApplicationController

  def index
    @friendrequests = Friendrequest.all
    render json: @friendrequests
  end

  def create
    @friendrequest = Friendrequest.new (friendrequest_params)
    if @friendrequest.save
      render json: @friendrequest
    else
      render json: @friendrequest.errors.full_messages, status: 400
    end

  end

  def destroy
    friendrequest = Friendrequest.find_by_id(params[:id])

    friendrequest.destroy!

    render json: Friendrequest.all
  end

  private

  def friendrequest_params
    params.require(:friendrequest).permit(:id, :requester_id, :requested_id)
  end
end

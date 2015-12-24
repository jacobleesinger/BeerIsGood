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

  private

  def friendrequest_params
    params.require(:friendrequest).permit(:requester_id, :requested_id)
  end
end

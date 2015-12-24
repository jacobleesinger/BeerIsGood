class Api::FriendrequestsController < ApplicationController
  def index
    @friendrequests = Friendrequest.all
    render json: @friendrequests
  end
end

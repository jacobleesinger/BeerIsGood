class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.all
    render json: @friendships

  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render json: @friendship
    else
      @errors = @friendship.errors.full_messages
      render json: @erros, status: 400
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:id, :user_id, :friend_id)
  end
end

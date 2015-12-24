class AddIndicesToFriendRequests < ActiveRecord::Migration
  def change
    add_index :friend_requests, :requester_id
    add_index :friend_requests, :requested_id
  end
end

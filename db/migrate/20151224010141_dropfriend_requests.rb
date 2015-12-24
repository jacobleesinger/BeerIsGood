class DropfriendRequests < ActiveRecord::Migration
  def change
    drop_table :friend_requests
  end
end

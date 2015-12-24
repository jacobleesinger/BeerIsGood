class CreateFriendrequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null: false
      t.integer :requested_id, null: false

      t.timestamps null: false
    end
  end
end

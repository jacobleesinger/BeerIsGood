class Friendrequest < ActiveRecord::Migration
  def change
    create_table :friendrequests do |t|
      t.integer :requester_id, null: false
      t.integer :requested_id, null: false

      t.timestamps null: false
    end
    add_index :friendrequests, :requester_id
    add_index :friendrequests, :requested_id
  end
end

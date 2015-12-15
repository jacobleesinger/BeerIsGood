class ChangeUserBirthdayToString < ActiveRecord::Migration
  def change
    change_column :users, :birthday, :string, null: false
  end
end

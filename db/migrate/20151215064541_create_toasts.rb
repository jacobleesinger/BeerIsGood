class CreateToasts < ActiveRecord::Migration
  def change
    create_table :toasts do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false

      t.timestamps
    end
    add_index :toasts, :user_id
    add_index :toasts, :review_id
  end
end

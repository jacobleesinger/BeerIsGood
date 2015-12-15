class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :beer_id, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :beer_id
  end
end

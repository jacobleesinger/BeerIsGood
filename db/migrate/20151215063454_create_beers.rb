class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :beers, :name
  end
end

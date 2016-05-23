class CreateCouriers < ActiveRecord::Migration
  def change
    create_table :couriers do |t|
      t.text :first_name
      t.text :last_name
      t.integer :phone

      t.timestamps null: false
    end
  end
end

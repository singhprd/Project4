class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.references :company, index: true, foreign_key: true
      t.references :courier, index: true, foreign_key: true
      t.text :item
      t.integer :quantity
      t.text :instructions
      t.date :from_date
      t.date :to_date
      t.string :type

      t.timestamps null: false
    end
  end
end

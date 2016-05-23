class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.text :name
      t.text :email
      t.text :phone
      t.text :address1
      t.text :address2
      t.text :address3
      t.text :postcode
      t.integer :lat
      t.integer :lng

      t.timestamps null: false
    end
  end
end

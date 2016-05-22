class AddNewFieldsToUserDbTable < ActiveRecord::Migration
  def change
    add_reference :users, :company
    add_reference :users, :courier

  end
end

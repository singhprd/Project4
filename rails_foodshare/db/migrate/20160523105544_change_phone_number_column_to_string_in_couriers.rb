class ChangePhoneNumberColumnToStringInCouriers < ActiveRecord::Migration
  def change
    change_column(:couriers, :phone, :text)
  end
end

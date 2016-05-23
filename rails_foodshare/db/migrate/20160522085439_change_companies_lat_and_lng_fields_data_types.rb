class ChangeCompaniesLatAndLngFieldsDataTypes < ActiveRecord::Migration
  def change
    change_column(:companies, :lat, :float) 
    change_column(:companies, :lng, :float) 
      
  
  end
end

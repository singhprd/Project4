class AddCompletedDateToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :completed_date, :datetime
  end
end

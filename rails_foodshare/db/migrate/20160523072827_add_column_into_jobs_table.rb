class AddColumnIntoJobsTable < ActiveRecord::Migration
  def change
    add_column :jobs, :accepted, :boolean
  end
end

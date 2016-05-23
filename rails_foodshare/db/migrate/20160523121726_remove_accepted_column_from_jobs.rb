class RemoveAcceptedColumnFromJobs < ActiveRecord::Migration
  def change
    remove_column :jobs, :accepted
  end
end

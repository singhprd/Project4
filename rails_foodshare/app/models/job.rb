class Job < ActiveRecord::Base
  belongs_to :company
  belongs_to :courier

  def getItem
    return item
  end


end

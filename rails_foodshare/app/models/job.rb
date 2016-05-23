class Job < ActiveRecord::Base
  belongs_to :company
  belongs_to :courier

  
# should this method be able to return a string with quantity + kg/g/ml/l?

  def hasBeenAccepted
    return accepted
  end

  # def getCompanyDetails
  #   puts Self.id
  # end

  # private 

  # def getCompanyDetails

  # end

end

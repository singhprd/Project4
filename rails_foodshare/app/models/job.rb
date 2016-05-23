class Job < ActiveRecord::Base
  belongs_to :company
  belongs_to :courier

  

  def getItem
    return item
  end

# should this method be able to return a string with quantity + kg/g/ml/l?
  def  getQuantity
    return quantity
  end

  # def setQuantity(amount)
  #   puts quantity
  #   quantity = amount
  # end 

  def getInstructions
    return instructions 
  end

  def getCompanyId
    return company_id
  end

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

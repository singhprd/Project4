class Courier < ActiveRecord::Base
  has_many :jobs
  has_many :users

  def getId
    return id
  end

  def getFirstName
    return first_name
  end

  def getLastName
    return last_name
  end

  def getFullName
    return "#{first_name} #{last_name}"
  end

  def getPhoneNumber
    return phone
  end

end

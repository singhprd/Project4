class Company < ActiveRecord::Base
  has_many :jobs
  has_many :users

  def getId 
    return id
  end

  def getName
    return name
  end

  def getEmail
    return email
  end

  def getPhone
    return phone
  end

  def getFullAddress 
    return "#{address1}, #{address2}, #{address3}, #{postcode}"
  end

  def getLocation
    return {lat: lat, lng: lng}
  end

end

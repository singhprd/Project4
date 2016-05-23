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

  def to_hash_no_jobs
    return {
      name: name,
      position: {
        lat: lat,
        lng: lng
      },
      contactDetails: {
        email: email,
        phone: phone,
        address1: address1,
        address2: address2,
        address3: address3,
        postcode: postcode
      }
    }
  end

end

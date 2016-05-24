class Company < ActiveRecord::Base
  has_many :jobs
  has_many :users

  def position
    return {lat: lat, lng: lng}
  end

  def to_hash
    return {
      name: name,
      position: position,
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

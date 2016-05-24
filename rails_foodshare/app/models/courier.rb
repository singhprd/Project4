class Courier < ActiveRecord::Base
  has_many :jobs
  has_many :users

  def to_hash
    return {
      first_name: first_name,
      last_name: last_name,
      phone: phone
    }
  end
end

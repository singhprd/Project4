class Job < ActiveRecord::Base
  belongs_to :company
  belongs_to :courier

# should this method be able to return a string with quantity + kg/g/ml/l?


  def self.jobs_for_user(user)
    jobs = Job.all.to_a

    jobs = jobs.select do |job|
      ( job.courier && (job.courier == user.courier) ||
        job.company && (job.company == user.company) ||
        (!job.courier && user.courier)
      )
    end
  end


  def to_hash_for_courier
    return {
      id: id,
      item: item,
      quantity: quantity,
      instructions: instructions,
      from_date: from_date.iso8601,
      to_date: to_date.iso8601,
      category: category,
      courier_id: courier_id,
      company: company ? company.to_hash : nil
    }
  end

  def to_hash_for_company
    return {
      id: id,
      item: item,
      quantity: quantity,
      instructions: instructions,
      from_date: from_date.iso8601,
      to_date: to_date.iso8601,
      category: category,
      courier: courier ? courier.to_hash : nil
    }
  end
end

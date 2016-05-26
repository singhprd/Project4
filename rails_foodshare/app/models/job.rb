class Job < ActiveRecord::Base
  belongs_to :company
  belongs_to :courier

# should this method be able to return a string with quantity + kg/g/ml/l?


  def self.jobs_for_user(user)
    jobs = Job.all.to_a

    jobs = jobs.select do |job|
      ( job.courier && (job.courier == user.courier) && job.completed_date.nil? ||
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
      company: company ? company.to_hash : nil,
      completed_date: completed_date
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
      courier: courier ? courier.to_hash : nil,
      completed_date: completed_date
    }
  end

  def assign_courier(courier)    
    raise ArgumentError.new(
      'Cannot assign courier to job: courier already assigned'
    ) if courier_id

    update(courier_id: courier.id)
  end

  def unassign_courier(courier)
    raise ArgumentError.new(
      'Cannot unassign courier from job: this courier is not currently assigned'
    ) if courier_id != courier.id

    update(courier_id: nil)
  end

  def complete(courier)
    raise ArgumentError.new(
      'Cannot complete job: assigned to different courier'
    ) if courier_id != courier.id

    raise ArgumentError.new(
      'Cannot complete job: already completed'
    ) if !completed_date.nil?

    update(completed_date: DateTime.now)
  end

  def uncomplete(courier)
    raise ArgumentError.new(
      'Cannot uncomplete job: assigned to different courier'
    ) if courier_id != courier.id
    
    raise ArgumentError.new(
      'Cannot uncomplete job: not completed yet'
    ) if completed_date.nil?

    update(completed_date: nil)
  end
end

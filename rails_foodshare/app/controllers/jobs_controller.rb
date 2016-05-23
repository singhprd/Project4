class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    courier = current_user.courier
    company = current_user.company

    if current_user.courier

      jobs = Job.all.to_a

      jobs = jobs.select do |job|
        !job.courier || job.courier == current_user.courier
      end

      jobs = jobs.map do |job|
        job.to_hash
      end
      
    elsif current_user.company
      jobs = current_user.company.jobs.map {
        |job| job.to_hash_no_company
      }
    end

    render json: jobs
  end

end
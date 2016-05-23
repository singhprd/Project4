class JobsController < ApplicationController
  before_action :authenticate_user!

  def index

    jobs = Job.jobs_for_user(current_user)

    if current_user.courier
      jobs = jobs.map do |job|
        job.to_hash
      end
    elsif current_user.company
      jobs = jobs.map do |job|
        job.to_hash_no_company
      end
    end

    render json: jobs
  end

end
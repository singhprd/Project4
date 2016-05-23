class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user.courier
      jobs = current_user.courier.jobs.map {
        |job| job.to_hash
      }
    elsif current_user.company
      jobs = current_user.company.jobs.map {
        |job| job.to_hash_no_company
      }
    end

    render json: jobs
  end

end
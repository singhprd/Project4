class JobsController < ApplicationController
  before_action :authenticate_user!

  def index

    jobs = Job.jobs_for_user(current_user)

    if current_user.courier
      jobs = jobs.map do |job|
        job.to_hash_for_courier
      end
    elsif current_user.company
      jobs = jobs.map do |job|
        job.to_hash_for_company
      end
    end

    render json: jobs
  end

  # def create
  #   if !current_user.company
  #     render :nothing => true, :status => :forbidden
  #   else
  #     job = Job.create(job_params)
  #     job.update(company_id: current_user.company_id)
  #     render json: job
  #   end
  # end

  # def update
  #   id = params[:id].to_i

  #   if id != current_user.company_id
  #     render nothing: true, status: :bad_request
  #   else
  #     company = Company.find_by(id: id)
  #     company.update(company_params)
  #     render json: company
  #   end
  # end

  # def destroy
  #   id = params[:id].to_i

  #   if id != current_user.company_id
  #     render nothing: true, status: :bad_request
  #   else
  #     Company.destroy(id)
  #     current_user.update(company_id: nil)
  #     render nothing: true, status: :ok
  #   end
  # end


  # private
  # def job_params
  #   params.require(:job).permit()
  # end


end
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

  def create
    if !current_user.company
      render :nothing => true, :status => :forbidden
    else

      begin
        job = Job.create(job_params)
        job.update(company_id: current_user.company_id)
        render json: job.to_hash_for_company
      rescue ArgumentError
        render text: "Invalid date", status: :bad_request
      end
    end
  end

  def update
    if current_user.company_id
      update_by_company
    elsif current_user.courier_id
      update_by_courier
    else
      render nothing: true, status: :forbidden
    end
  end

  def update_by_company
    id = params[:id].to_i
    job = Job.find(id)

    if job.company_id != current_user.company_id
      render nothing: true, status: :forbidden
    else
      job.update(job_params)
      render json: job.to_hash_for_company
    end
  end

  def update_by_courier
    id = params[:id].to_i
    job = Job.find(id)

    accepted = params[:accepted]
    completed = params[:completed]

    begin
      if  (!accepted.nil? && !completed.nil?) ||
          (accepted.nil? && completed.nil?)
        raise ArgumentError.new('Please include either an "accepted" or a "completed" field (but not both).')
      end

      if !accepted.nil?
        job.assign_courier(current_user.courier) if accepted == true
        job.unassign_courier(current_user.courier) if accepted == false

        render json: job.to_hash_for_courier
      end

      if !completed.nil?
        job.complete(current_user.courier) if completed == true
        job.uncomplete(current_user.courier) if completed == false

        render json: job.to_hash_for_courier
      end
    rescue ArgumentError => e
      render text: e.message, status: :bad_request
    end
  end

  def destroy
    id = params[:id].to_i
    job = Job.find(id)

    if job.company_id != current_user.company_id
      render nothing: true, status: :forbidden
    else
      job.destroy
      render nothing: true, status: :ok
    end
  end


  private
  def job_params
    job_params = params.require(:job).permit(:item, :quantity, :instructions, :from_date, :to_date, :category)

    # This will raise ArgumentError if date is invalid
    Date.parse(job_params[:from_date]) if job_params[:from_date]
    Date.parse(job_params[:to_date]) if job_params[:to_date]

    return job_params
  end

end
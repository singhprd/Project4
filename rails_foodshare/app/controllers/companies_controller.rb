class CompaniesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.company
  end

  def create
    if current_user.courier || current_user.company
      render :nothing => true, :status => :bad_request
    else
      company = Company.create(company_params)
      current_user.update(company_id: company.id)
      render json: company
    end
  end

  def update
    id = params[:id].to_i

    if id != current_user.company_id
      render nothing: true, status: :bad_request
    else
      company = Company.find_by(id: id)
      company.update(company_params)
      render json: company
    end
  end

  def destroy
    id = params[:id].to_i

    if id != current_user.company_id
      render nothing: true, status: :bad_request
    else
      Company.destroy(id)
      current_user.update(company_id: nil)
      render nothing: true, status: :ok
    end
  end


  private
  def company_params
    params.require(:company).permit(:name, :lat, :lng, :phone, :email, :address1, :address2, :address3, :postcode)
  end

  # def index
  #   companies = [
  #     {
  #       "name" => "CodeClan",
  #       "position" => {
  #         "lat" => 55.946967,
  #         "lng" => -3.202021
  #       },
  #       "contactDetails" => {
  #         "phone" => "07700900000",
  #         "email" => "hello@hello.com",
  #         "address1" => "37 Castle Terrace",
  #         "address2" => "Edinburgh",
  #         "address3" => "",
  #         "postcode" => "EH1 2EL"
  #       },
  #       "jobs" => [
  #         {
  #           "item" => "couscous",
  #           "quantity" => 5,
  #           "instructions" => "Use buzzer at back entrance, ask for Alistair",
  #           "fromDate" => "2016-05-22",
  #           "toDate" => "2016-05-23",
  #           "type" => "supply",
  #           "accepted" => false
  #         }
  #       ]
  #     }
  #   ]
  #   render json: companies
  # end
end
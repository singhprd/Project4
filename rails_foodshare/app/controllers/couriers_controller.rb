class CouriersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: current_user.courier
  end

  def create
    if current_user.courier || current_user.company
      render :nothing => true, :status => :bad_request
    else
      courier = Courier.create(courier_params)
      current_user.update(courier_id: courier.id)
      render json: courier
    end
  end

  def update
    id = params[:id].to_i

    if id != current_user.courier_id
      render nothing: true, status: :bad_request
    else
      courier = Courier.find_by(id: id)
      courier.update(courier_params)
      render json: courier
    end
  end

  def destroy
    id = params[:id].to_i

    if id != current_user.courier_id
      render nothing: true, status: :bad_request
    else
      Courier.destroy(id)
      current_user.update(courier_id: nil)
      render nothing: true, status: :ok
    end
  end

  private
  def courier_params
    params.require(:courier).permit(:first_name, :last_name, :phone)
  end
end

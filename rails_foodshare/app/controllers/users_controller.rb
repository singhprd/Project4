class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: current_user.to_json(include: [:company, :courier])
  end
end
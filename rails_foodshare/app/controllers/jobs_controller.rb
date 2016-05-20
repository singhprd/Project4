class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: "hello"
  end
end
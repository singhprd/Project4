class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    jobs = [
      {
        "item" => "couscous",
        "quantity" => 5,
        "instructions" => "Use buzzer at back entrance, ask for Alistair",
        "fromDate" => "2016-05-22",
        "toDate" => "2016-05-23",
        "type" => "supply",
        "accepted" => false,
        "company" => {
          "name" => "CodeClan",
          "position" => {
            "lat" => 55.946967,
            "lng" => -3.202021
          },
          "contactDetails" => {
            "phone" => "07700900000",
            "email" => "hello@hello.com",
            "address1" => "37 Castle Terrace",
            "address2" => "Edinburgh",
            "address3" => "",
            "postcode" => "EH1 2EL"
          }
        }
      }
    ]
    render json: jobs
  end

end
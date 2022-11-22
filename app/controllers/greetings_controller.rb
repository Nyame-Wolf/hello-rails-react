class GreetingsController < ApplicationController
  def index
    r = Random.new
    @greeting = Greeting.find(r.rand(1..5))
    render json: @greeting
  end
end

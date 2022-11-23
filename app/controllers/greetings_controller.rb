class GreetingsController < ApplicationController
  def api
    r = Random.new
    @greeting = Greeting.find(r.rand(1..5))
    render json: @greeting
  end

  def index; end
end

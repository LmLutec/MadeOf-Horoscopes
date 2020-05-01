class DailiesController < ApplicationController


    def index
        dailies = Daily.all 
        render json: dailies
    end 

    def create
        daily = Daily.new(date, text)
        daily.horoscope_id = params[:horoscope_id]
        daily.save 
    end 
     
end

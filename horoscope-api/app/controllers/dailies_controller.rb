class DailiesController < ApplicationController


    def index
        dailies = Daily.all 

        options = {
            include: [:horoscope]
        }
        render json: DailySerializer.new(dailies,options)
    end 

    def create
        daily = Daily.new(date: params[:dateReceived], source: params[:sourceReceived], text: params[:readingReceived])
        daily.horoscope_id = params[:horoscope_id]
        daily.save 
    end 
     
end

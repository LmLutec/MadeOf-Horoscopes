class DailiesController < ApplicationController


    def index
        dailies = Daily.all.sort_by { |d| d.date }
        render json: DailySerializer.new(dailies).to_serialized_json
    end 

    def create
        daily = Daily.new(date: params[:dateReceived], source: params[:sourceReceived], text: params[:readingReceived])
        daily.horoscope_id = params[:horoscope_id]
        daily.save 
    end 
     
end

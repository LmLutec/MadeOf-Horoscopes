class HoroscopesController < ApplicationController

    @@arr = []

    def index
       horoscopes = Horoscope.all 
       render json: HoroscopeSerializer.new(horoscopes).to_serialized_json
    end 
    
    def create
        horoscope = Horoscope.new(name, start_date, end_date, symbol, house, planet, element, quality, polarity)
    end

    def show
        horoscope = Horoscope.find(params[:id])
        render json: HoroscopeSerializer.new(horoscope).to_serialized_json
    end 


end



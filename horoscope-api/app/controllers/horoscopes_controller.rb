class HoroscopesController < ApplicationController

    def index
       Scraper.new.daily_page
       horoscopes = Horoscope.all 

       options = {
           include: [:dailies] 
       }
       render json: HoroscopeSerializer.new(horoscopes, options)
    end 
    
    def create
        horoscope = Horoscope.new(name, start_date, end_date, symbol, house, planet, element, quality, polarity)
    end

    def show
        horoscope = Horoscope.find(params[:id])
        render json: HoroscopeSerializer.new(horoscope)
    end 

end



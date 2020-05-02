class HoroscopesController < ApplicationController

    def index
       Scraper.new.daily_page
       horoscopes = Horoscope.all 
       render json: horoscopes, only:[:name, :start_date, :end_date, :symbol, :house, :planet, :element, :quality, :polarity], include: [:dailies]
    end 
    
    def create
        horoscope = Horoscope.new(name, start_date, end_date, symbol, house, planet, element, quality, polarity)
    end

    def show
        horoscope = Horoscope.find(params[:id])
        render json: horoscope, only:[:name, :start_date, :end_date, :symbol, :house, :planet, :element, :quality, :polarity], include: [:dailies]
    end 

end



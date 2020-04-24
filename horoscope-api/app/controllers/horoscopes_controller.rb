require 'open-uri'
require 'nokogiri'


class HoroscopesController < ApplicationController

    def index
       horoscopes = Horoscope.all 
       render json: horoscopes
    end 

    def create
        horoscope = Horoscope.new(name, start_date, end_date, symbol, house, planet, element, quality, polarity)
    end

    def show
        horoscope = Horoscope.find(params[:id])
        render json: horoscope
    end 

end



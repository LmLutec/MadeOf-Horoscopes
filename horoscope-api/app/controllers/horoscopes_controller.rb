require 'open-uri'
require 'nokogiri'


class HoroscopesController < ApplicationController

    def index
       horoscopes = Horoscope.all 
       render json: horoscopes
    end 

    def create
        horoscope = Horoscope.new(name, start_date, end_date, house, planet, element, quality, polarity)
    end

end



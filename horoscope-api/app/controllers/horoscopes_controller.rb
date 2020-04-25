require 'nokogiri'
require 'open-uri'


class HoroscopesController < ApplicationController

    def index
       horoscopes = Horoscope.all 
       get_site
       render json: horoscopes
    end 

    def create
        horoscope = Horoscope.new(name, start_date, end_date, symbol, house, planet, element, quality, polarity)
    end

    def show
        horoscope = Horoscope.find(params[:id])
        render json: horoscope
    end 


    def get_site
        site = open("https://www.thestar.com.my/lifestyle/horoscope")
        t = Nokogiri::HTML(site)
        
    end

end



require 'nokogiri'
require 'open-uri'


class DailiesController < ApplicationController

    def create
        @daily = Daily.new(date, text, horoscope_id)
    end  
end

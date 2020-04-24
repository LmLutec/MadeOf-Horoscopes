require 'open-uri'
require 'nokogiri'

class Scraper

    def grab_site
        page = open('https://astrologyyard.com')

        doc = Nokogiri::HTML(page)
        puts doc 
    end 


end 
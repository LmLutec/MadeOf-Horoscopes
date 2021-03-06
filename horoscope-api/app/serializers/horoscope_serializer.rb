class HoroscopeSerializer
  include FastJsonapi::ObjectSerializer
  has_many :dailies
  attributes :name, :start_date, :end_date, :symbol, :house, :planet, :element, :quality, :polarity

  def initialize(horoscope)
    @horoscope = horoscope
  end
 
  def to_serialized_json
    @horoscope.to_json(:include => {
      :dailies => {:only => [:id, :date, :source, :text, :horoscope_id]},
  },
       :except => [:updated_at])
  end


end

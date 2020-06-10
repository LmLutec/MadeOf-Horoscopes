class DailySerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :horoscope
  attributes :date, :source, :text

  def initialize(daily)
    @daily = daily
  end
 
  def to_serialized_json
    @daily.to_json(:include => {
      :horoscope => {:only => [:horoscope_id]},
  },
       :except => [:updated_at])
  end


end

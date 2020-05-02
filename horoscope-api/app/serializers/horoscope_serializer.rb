class HoroscopeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :start_date, :end_date, :symbol, :house, :planet, :element, :quality, :polarity
  has_many :dailies
end

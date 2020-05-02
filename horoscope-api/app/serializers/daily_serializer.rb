class DailySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :text
  belongs_to :horoscope
end

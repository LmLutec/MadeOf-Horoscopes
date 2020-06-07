class DailySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :source, :text
  belongs_to :horoscope
end

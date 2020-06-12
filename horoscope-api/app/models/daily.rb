class Daily < ApplicationRecord
    belongs_to :horoscope


    # scope :business_occasion, -> {where(occasion: 'Business' )}
 
end

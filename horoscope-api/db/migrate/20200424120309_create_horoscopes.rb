class CreateHoroscopes < ActiveRecord::Migration[6.0]
  def change
    create_table :horoscopes do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.string :house
      t.string :planet
      t.string :element
      t.string :quality
      t.string :polarity

      t.timestamps
    end
  end
end

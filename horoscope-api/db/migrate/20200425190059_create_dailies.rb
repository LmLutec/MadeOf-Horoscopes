class CreateDailies < ActiveRecord::Migration[6.0]
  def change
    create_table :dailies do |t|
      t.belongs_to :horoscope
      t.string :date
      t.text :text

      t.timestamps
    end
  end
end

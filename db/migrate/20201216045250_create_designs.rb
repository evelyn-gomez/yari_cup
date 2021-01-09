class CreateDesigns < ActiveRecord::Migration[6.0]
  def change
    create_table :designs do |t|
      t.string :cup_size
      t.string :cup_color
      t.string :cup_text

      t.timestamps
    end
  end
end

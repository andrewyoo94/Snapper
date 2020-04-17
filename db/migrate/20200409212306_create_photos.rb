class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :photographer_id, null: false
      
      t.timestamps
    end
  end
end

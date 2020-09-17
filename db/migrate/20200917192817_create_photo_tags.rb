class CreatePhotoTags < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_tags do |t|
      t.integer "photo_id", null: false
      t.integer "tag_id", null: false

      t.timestamps
    end
  end
end

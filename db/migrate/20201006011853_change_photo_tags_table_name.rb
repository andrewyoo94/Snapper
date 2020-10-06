class ChangePhotoTagsTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :photo_tags, :phototags
  end
end
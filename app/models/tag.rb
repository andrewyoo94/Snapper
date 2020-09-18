class Comment < ApplicationRecord
  validates :name, :photo_id, presence: true

  belongs_to :phototag
end


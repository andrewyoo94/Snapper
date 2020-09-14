class Comment < ApplicationRecord
  validates :name, :photo_id, presence: true

  has_many :photos
end
class Tag < ApplicationRecord
  validates :name, :photo_id, presence: true

  # has_many :phototag
end


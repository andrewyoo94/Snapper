class PhotoTag < ApplicationRecord 
    validates :photo_id, :tag_id, presence: true

    has_many :photos

    has_many :tags
end 
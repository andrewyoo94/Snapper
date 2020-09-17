class PhotoTag < ApplicationRecord 
    validates :photo_id, :tag_id presence: true

    has_many :photos

    has_many :tags

    # make associations to photos and tags later!
end 
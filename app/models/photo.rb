class Photo < ApplicationRecord 
    validates :title, presence: true

    has_one_attached :image

    belongs_to :user,
        foreign_key: :photographer_id,
        class_name: "User"
end 
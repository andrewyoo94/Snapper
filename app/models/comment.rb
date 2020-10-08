class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :photo

  def author
    user.username
  end 

end
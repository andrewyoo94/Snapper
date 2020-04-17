json.extract! photo, :id, :title, :description, :photographer_id

if photo.image.attached?
    json.photoUrl url_for(photo.image)
else 
    json.photoUrl nil 
end 

json.user photo.user
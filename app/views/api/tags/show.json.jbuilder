@tags.each do |tag|
    json.set! tag.photo_id do 
        json.partial! 'tag', tag: tag 
    end 
end 
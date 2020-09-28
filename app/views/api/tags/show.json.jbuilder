@tags.each do |tag|
    debugger
    json.set! tag.id do 
        json.partial! 'tag', tag: tag 
    end 
end 
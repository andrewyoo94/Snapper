json.set! @tag.id do
  json.partial! 'tag', tag: @tag
end
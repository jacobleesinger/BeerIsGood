json.array! @reviews do |review|
    json.extract! review , :id, :body, :rating, :author_id, :beer_id
end

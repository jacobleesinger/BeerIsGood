json.array! @comments do |comment|
    json.extract! comment, :id, :body, :author_id, :review_id, :created_at
end

json.post do
    json.detail do
        json.extract! @post, :title, :content, :comments
    end
    
    json.subId @sbPost.sub_id
end
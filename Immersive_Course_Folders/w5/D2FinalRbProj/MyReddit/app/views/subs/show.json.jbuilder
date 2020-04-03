json.thread do
    json.extract! @sub, :id, :title , :description, :posts
    json.author @author
end

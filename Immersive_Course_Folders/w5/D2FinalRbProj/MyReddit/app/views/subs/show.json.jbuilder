json.thread do
    json.extract! @sub, :title , :description, :posts
    json.author @author
end

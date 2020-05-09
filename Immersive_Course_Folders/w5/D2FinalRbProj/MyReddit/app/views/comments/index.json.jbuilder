json.array! @comments do |cmt|
  authr = ""

  if cmt.author  
    authr = cmt.author.name
  end

  json.extract! cmt, :id, :content, :author_id, :post_id, :child_comments
  json.authorName authr
end
@pokeMon.each do |pokeMn|
    json.set! pokeMn.id do
        json.extract! pokeMn, :id, :name, :image_url
    end
end

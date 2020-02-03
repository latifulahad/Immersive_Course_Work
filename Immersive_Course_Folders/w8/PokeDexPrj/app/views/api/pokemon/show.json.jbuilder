json.pokemon do
    json.extract! @pokeMon, :id, :name, :attack, :defense, :moves, :poke_type
end

json.items do
    @pokeMon.items.each do |itm|
        json.set! itm.id do
            json.extract! itm, :id, :pokemon_id, :name, :price, :happiness
        end
    end
end
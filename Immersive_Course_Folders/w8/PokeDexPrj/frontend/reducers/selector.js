export const chgPokeState = ({ entities }) => (
    Object.values(entities.pokemon)
)

export const chgItemState = ({ entities }, id) => {
    const list = Object.values(entities.items)
    const ans = [];
    list.forEach(li => {
        if(li.pokemon_id === id) { ans.push(li) }
    })
    return ans;
}

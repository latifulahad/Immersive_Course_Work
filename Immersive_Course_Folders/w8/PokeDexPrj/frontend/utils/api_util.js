
export const getPokemon = () => (
    $.ajax({
        method: "GET",
        url: '/api/pokemon'
    })
)
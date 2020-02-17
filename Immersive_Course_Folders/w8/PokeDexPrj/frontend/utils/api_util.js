
export const getPokemon = () => (
    $.ajax({
        method: "GET",
        url: '/api/pokemon'
    })
)

export const getPokeInfo = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/pokemon/${id}`
    })
)

export const addPoke = (pokemon) => (
    $.ajax({
        method: "POST",
        url:'/api/pokemon',
        data: { pokemon }
    })
)

export const logUserIn = (info) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user: info }
    })
)

export const bringUser = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}`
    })
)

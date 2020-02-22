
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

export const logUserIn = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
)

export const logOut = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)

export const bringUser = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${id}`
    })
)


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

export const addUsr = (usr) => (
    $.ajax({
        method: "POST",
        url: '/api/users',
        data: { user: usr }
    })
)

export const updateUsr = (data) => {
    let id = data.id;
    delete data["id"];
    
    return(
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${id}`,
        data: { user: data }
    })
    )
}

export const delUsr = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/users/${id}`
    })
)

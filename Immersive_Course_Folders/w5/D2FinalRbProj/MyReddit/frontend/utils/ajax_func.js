export const log_user = (inputData) => (
    $.ajax({
        method: "POST",
        url: "/session",
        data: { user: inputData }
    })
)

export const log_out_user = () => (
    $.ajax({
        method: "DELETE",
        url: '/session'
    })
)

export const create_user = (data) => (
    $.ajax({
        method: "POST",
        url: "/users",
        data: { user: data }
    })
)

export const threadsInx = () => (
    $.ajax({
        method: "GET",
        url: "subs"
    })
)

export const threadShow = (id) => (
    $.ajax({
        method: "GET",
        url: `subs/${id}`
    })
)

export const makePost = (info) => (
    $.ajax({
        method: "POST",
        url: '/post',
        data: { post: info }
    })
)
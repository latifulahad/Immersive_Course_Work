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

export const create_Thrd = (data) => (
    $.ajax({
        method: "POST",
        url: "/subs",
        data: { sub: data }
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
        url: '/posts',
        data: { post: info }
    })
)

export const deletePost = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/posts/${id}`
    })
)

export const bringComments = (id) => (
    $.ajax({
        method: "GET",
        url: "/comments",
        data: { post: id }
    })
)

export const bringNames = (id) => (
    $.ajax({
        method: "GET",
        url: "/comments",
        data: { pCmt: id }
    })
)

export const authorName = (id) => (
    $.ajax({
        method: "GET",
        url: `/users/${id}`
    })
)

export const makeComt = (info) => (
    $.ajax({
        method: "POST",
        url: "/comments",
        data: { comment: info }
    })
)

export const brgUsrInfo = (id) => (
    $.ajax({
        method: 'GET',
        url: `users/${id}`,
        data: { cond: true }
    })
)

export const updateUsr = (id, info) => (
    $.ajax({
        method: "PATCH",
        url: `users/${id}`,
        data: info
    })
)
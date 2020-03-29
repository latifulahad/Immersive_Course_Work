export const log_user = (inputData) => (
    $.ajax({
        method: "POST",
        url: "/session",
        data: { user: inputData }
    })
)

export const log_out_user = () => {
    $.ajax({
        method: "DELETE",
        url: '/session'
    })
}

export const threadsInx = () => (
    $.ajax({
        method: "GET",
        url: "subs"
    })
)
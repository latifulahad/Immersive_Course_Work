export const log_user = (inputData) => {
    $.ajax({
        method: "GET",
        url: "/session/new",
        data: { user: inputData }
    })
}

export const log_out_user = () => {
    $.ajax({
        method: "DELETE",
        url: '/session'
    })
}
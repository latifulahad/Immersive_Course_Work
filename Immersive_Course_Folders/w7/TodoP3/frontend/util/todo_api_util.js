
export const fetchTodos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/todos'
    })
)    

export const addTodo = (todo) => {

    return($.ajax({
        data: { todo },
        method: 'POST',
        url: '/api/todos'
    }))
}

export const updTodo = (todo) => {
  
    return($.ajax({
        method: "PATCH",
        url:`api/todos/${todo.id}`,
        data: { todo }
        })
    )
}

export const deleteTd = (todo) => (
    $.ajax({
        method: 'DELETE',
        url: `api/todos/${todo.id}`
    })
)

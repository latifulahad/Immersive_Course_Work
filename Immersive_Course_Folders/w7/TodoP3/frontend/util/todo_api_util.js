
export const fetchTodos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/todos'
    })
)    

export const addTodo = (todo) => {
    let wntObj = { todo: todo }; //the way to ensure the wnt_params's dot require is satisfied  

    return($.ajax({
        data: wntObj,
        method: 'POST',
        url: '/api/todos'
    }))
}

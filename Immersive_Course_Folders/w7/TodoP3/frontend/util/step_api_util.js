export const fetchSteps = (todo_id) => (
    $.ajax({ 
        method: 'GET',
        url: `api/todos/${todo_id}/steps`
     })
)

export const addStep = (step, todo_id) => (
    $.ajax({
        method: 'POST',
        data: { step },
        url: `api/todos/${todo_id}/steps`
    })
)
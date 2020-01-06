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

export const rmStep = (step) => (
    $.ajax({
        method: 'DELETE',
        url: `api/steps/${step.id}`
    })
)

export const updStep = (step) => (
    $.ajax({
        method: 'PATCH',
        url: `api/steps/${step.id}`,
        data: { step }
    })
)

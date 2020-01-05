
export const allTodos = ({ todos }) => {
    const arr = [];
    const wntedObj = todos; 
    const kys = Object.keys(wntedObj);
    kys.forEach(ky => {
        arr.push(wntedObj[ky]);
    })
    return arr;
}

export const stepsByTodoId = ({ steps }, todo_id) => { 
    const arr = [];
    const wntKys = Object.keys(steps);
    wntKys.forEach(ky => { 
        let step = steps[ky];
        if(step.todo_id === todo_id) arr.push(step); 
    })

    return arr;
}

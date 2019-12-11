
const allTodos = (store) => {
    const arr = [];
    const wntedObj = store.todos; 
    const kys = Object.keys(wntedObj);
    kys.forEach(ky => {
        arr.push(wntedObj[ky]);
    })
    return arr;
}

export default allTodos;
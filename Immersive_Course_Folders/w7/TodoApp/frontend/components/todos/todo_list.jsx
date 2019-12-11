import React from 'react';
import ListItem from './todo_list_item';

export default ({ todos }) => {
    const list = todos.map((todo, idx) => {
        return(<ListItem id={idx} item={todo}/>)
    });
    
    return (
        <div>
            <h3>Todo List goes here!</h3>
            <ul>{list}</ul>
        </div>
    )
};
import React from 'react';
import ListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.todos.map((todo, idx) => (
            <ListItem key={idx} item={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />
        )
        );
        const idx = list.length + 1;

        return (
            <div>
                <h3>Todo List goes here!</h3>
                <ul>{list}</ul>
                <TodoForm receiveTodo={this.props.receiveTodo} id={idx} />
            </div>
        );
    }
}

export default TodoList;

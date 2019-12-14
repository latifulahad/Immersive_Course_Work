import React from 'react';
import { removeTodo } from '../../actions/todo_actions';

 class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDone = this.toggleDone.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleTodo(evt) {
        evt.preventDefault();

        const item = this.props.item;
        this.props.removeTodo(item);
    }

    toggleDone(evt) {
        evt.preventDefault();

        const newTodo = Object.assign({}, this.props.item);
        if(newTodo.done === false) {
            newTodo.done = true;
            this.props.receiveTodo(newTodo);
        } else {
            newTodo.done = false;
            this.props.receiveTodo(newTodo);
        }
    }

     render() {
         const title = this.props.item.title;
         const dn = this.props.item.done;

         return(
            <li >
            {title}
            <button onClick={this.toggleDone}>{`${dn}`}</button>
            <button onClick={this.toggleTodo}>Remove Todo</button>
            </li>
         )
    }

}

export default ListItem;
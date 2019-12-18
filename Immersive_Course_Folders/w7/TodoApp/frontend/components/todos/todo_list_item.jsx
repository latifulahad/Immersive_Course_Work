import React from 'react';
import TodoDetailContainer from './todo_detail_container';
import StepListContainer from "../step_list/step_list_container";

 class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { detail: false };
        this.toggleDone = this.toggleDone.bind(this);
        this.toggleDetail = this.toggleDetail.bind(this);
    }

    toggleDetail(evt) {
        evt.preventDefault();

        if(this.state.detail === false) {
            this.setState({ detail: true });
        } else {
            this.setState({ detail: false });
        }
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
         let removalTg;
         if(this.state.detail === true) { removalTg = <TodoDetailContainer item={this.props.item}/> };

         return(
            <li >
            {title}
            <button onClick={this.toggleDone}>{`${dn}`}</button>
            <button onClick={this.toggleDetail}>Detail</button>
            { removalTg }

            <StepListContainer todo_id={this.props.item.id}/>
            </li>
         )
    }

}

export default ListItem;
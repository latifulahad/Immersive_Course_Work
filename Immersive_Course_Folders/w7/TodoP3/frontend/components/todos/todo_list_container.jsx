import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, 
         removeTodo,
        bringTodos, 
        createTodo } from "../../actions/todo_actions";  

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDisptachToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    prntTodos: () => dispatch(bringTodos()),
    newTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDisptachToProps)(TodoList);

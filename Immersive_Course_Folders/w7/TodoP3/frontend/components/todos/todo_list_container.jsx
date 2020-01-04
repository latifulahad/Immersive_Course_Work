import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { bringTodos, createTodo, updateTodo, rmTodo } from "../../actions/todo_actions";  


const mapStateToProps = state => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDisptachToProps = dispatch => ({
    removeTodo: todo => dispatch(rmTodo(todo)),
    prntTodos: () => dispatch(bringTodos()),
    newTodo: todo => dispatch(createTodo(todo)),
    updateTd: todo => dispatch(updateTodo(todo)),
});                                              
                                                 
export default connect(mapStateToProps, mapDisptachToProps)(TodoList);

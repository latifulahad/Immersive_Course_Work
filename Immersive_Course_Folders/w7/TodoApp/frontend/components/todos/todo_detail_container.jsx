import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';

const mapDispatchToProps = (dispatch, { item }) => ({
    removeTodo: () => { dispatch(removeTodo(item)) }
})

export default connect(null, mapDispatchToProps)(TodoDetailView);
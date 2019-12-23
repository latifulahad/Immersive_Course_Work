import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { item }) => ({
    removeTodo: () => { dispatch(removeTodo(item)) },
    receiveSteps: () => { dispatch(receiveSteps()) }
})

export default connect(null, mapDispatchToProps)(TodoDetailView);
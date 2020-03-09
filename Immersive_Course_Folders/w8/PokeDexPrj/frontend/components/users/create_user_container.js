import { connect } from 'react-redux';
import { addUser } from '../../actions/users_action'
import CreateUser from './create_user';

const mapStateToProps = state => ({
    id: state.ui.session.id,
    errors: state.entities.errors
})

const mapDispatchToProps = dispatch => ({
    sendUser: (data) => dispatch(addUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
import { connect } from 'react-redux';
import UpdateUser from './update_user';
import { updateUser } from '../../actions/users_action'

const mapStateToProps = (state, ownProps) => ({
    person: ownProps.dude,
    errors: state.entities.errors
})

const mapDispatchToProps = (dispatch) => ({
    sendChanges: (arg) => dispatch(updateUser(arg)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
import { connect } from 'react-redux';
import UpdateUser from './update_user';
import { updateUser } from '../../actions/users_action'
import { rmErr } from '../../actions/pokemon_actions'

const mapStateToProps = (state) => ({
    person: state.ui.user,
    errors: state.entities.errors
})

const mapDispatchToProps = (dispatch) => ({
    sendChanges: (arg) => dispatch(updateUser(arg)),
    cleanErr: () => dispatch(rmErr()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
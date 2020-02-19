import { connect } from 'react-redux';
import { showUser } from '../../actions/users_action';
import ShowUser from './show_user';

const mapStateToProps = (state, { id }) => ({ 
    userId: id,   
    person: state.ui.user 
})

const mapDispatchToProps = (dispatch) => ({
    loadUser: (id) => dispatch(showUser(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
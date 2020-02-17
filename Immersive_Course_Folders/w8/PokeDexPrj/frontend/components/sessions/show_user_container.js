import { connect } from 'react-redux';
import { showUser } from '../../actions/users_action';
import ShowUser from './show_user';

const mapStateToProps = ({ ui }, ownProps) => ({    
    user: ui.user 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadUser: () => dispatch(showUser(ownProps.match.params.id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
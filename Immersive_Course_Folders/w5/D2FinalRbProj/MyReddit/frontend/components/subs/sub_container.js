import { connect } from 'react-redux';
import Subs from './sub';

import { logout_user } from '../../actions/sessions_action';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.ui.session.id)
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logout_user())
})

export default connect(mapStateToProps, mapDispatchToProps)(Subs);
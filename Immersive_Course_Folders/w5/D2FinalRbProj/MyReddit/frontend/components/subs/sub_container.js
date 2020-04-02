import { connect } from 'react-redux';
import { bringThreads } from '../../actions/threads_actions';
import Subs from './sub';

import { logout_user } from '../../actions/sessions_action';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.ui.session.id),
    threads: state.entities.threads
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logout_user()),
    bringThreads: () => dispatch(bringThreads())
})

export default connect(mapStateToProps, mapDispatchToProps)(Subs);
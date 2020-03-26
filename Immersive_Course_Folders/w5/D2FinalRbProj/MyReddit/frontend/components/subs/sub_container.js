import { connect } from 'react-redux';
import Subs from './sub';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.ui.session.id)
})

export default connect(mapStateToProps)(Subs);
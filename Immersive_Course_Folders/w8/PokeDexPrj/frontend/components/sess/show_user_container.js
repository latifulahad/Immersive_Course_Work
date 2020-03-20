import { connect } from 'react-redux';
import { showUser, loggOut, dlUser } from '../../actions/users_action';
import ShowUser from './show_user';
import { log_out } from '../../actions/sessions_action';

const mapStateToProps = (state, ownProps) => { 
    let id = ownProps.match.params.userId;

    return({
        person: state.ui.user,
        sessId: state.ui.session.id,
        wntId: id
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.match.params.userId
    
    return({
        loadUser: (id) => dispatch(showUser(id)),
        rmUser: () => dispatch(dlUser(id)), 
        logOut: () => { 
            dispatch(log_out());
            dispatch(loggOut());
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);


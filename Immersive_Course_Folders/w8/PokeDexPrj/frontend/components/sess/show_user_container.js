import { connect } from 'react-redux';
import { showUser } from '../../actions/users_action';
import ShowUser from './show_user';

const mapStateToProps = (state, ownProps) => { 
    let id = ownProps.match.params.userId;

    return({
        person: state.ui.user,
        wntId: id
    })
}

const mapDispatchToProps = (dispatch) => ({
    loadUser: (id) => dispatch(showUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);


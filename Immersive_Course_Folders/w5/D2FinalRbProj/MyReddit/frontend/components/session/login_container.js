import { connect } from 'react-redux';
import { login_user } from '../../actions/sessions_action'
import Login from './login';

const mapStateToProps = (state) => ({
    err: state.entities.errors
})

const mapDispatchToProps = (dispatch) => ({
    login: (inpData) => dispatch(login_user(inpData)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
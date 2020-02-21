import { connect } from 'react-redux';
import LoginForm from './login_form';

import { log_in_usr } from '../../actions/sessions_action';
import { showUser } from '../../actions/users_action';

const mapStateToProps = state => ({
    tst01: ""
})

const mapDispatchToProps = dispatch => ({
    loginUser: info => dispatch(log_in_usr(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
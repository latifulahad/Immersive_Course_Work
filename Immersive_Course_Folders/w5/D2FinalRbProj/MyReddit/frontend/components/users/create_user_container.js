import { connect } from 'react-redux';
import { makeUser } from '../../actions/users_action'
import CreateUser from "./create_user";

const mapStateToProps = (state) => ({
    filler: ""
})

const mapDispatchToProps = (dispatch) => ({
    mkUser: (inpData) => dispatch(makeUser(inpData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

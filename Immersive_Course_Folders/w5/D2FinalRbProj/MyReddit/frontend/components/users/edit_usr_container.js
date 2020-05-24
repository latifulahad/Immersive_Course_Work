import { connect } from 'react-redux';
import EditUser from './edit_usr';
import { bringUsrInfo } from '../../actions/users_action';

const mapStateToProps = (state) => ({
    wntId: state.ui.session.id 
})

const mapDisptachToProps = (dispatch) => ({
    bringData: (id) => dispatch(bringUsrInfo(id))
})

export default connect(mapStateToProps, mapDisptachToProps)(EditUser);
import { connect } from 'react-redux';
import EditUser from './edit_usr';
import { bringUsrInfo, updateUsrInfo } from '../../actions/users_action';

const mapStateToProps = (state) => ({
    wntId: state.ui.session.id,
    err: state.entities.errors 
})

const mapDisptachToProps = (dispatch) => ({
    bringData: (id) => dispatch(bringUsrInfo(id)),
    sendUsrInfo: (id, info) => dispatch(updateUsrInfo(id, info)) 
})

export default connect(mapStateToProps, mapDisptachToProps)(EditUser);
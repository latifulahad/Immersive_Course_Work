import { connect } from 'react-redux';
import DeleteTrd from './delete_trd';

const mapStateToProps = (state, ownProps) => ({
    trdId: ownProps.wntId,
    errors: state.entities.errors
})

const mapDispatchToProps = (dispatch) => ({
    sendPass: (pass) => dispatch(checkPass(pass))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTrd);
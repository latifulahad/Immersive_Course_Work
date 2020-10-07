import { connect } from 'react-redux';
import DeleteTrd from './delete_trd';

const mapStateToProps = (state, ownProps) => ({
    trdId: ownProps.match.params.id,
    userId: state.ui.session.id
})

export default connect(mapStateToProps)(DeleteTrd);
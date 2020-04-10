import { connect } from 'react-redux';
import { bringThread } from '../../actions/threads_actions'
import { deletePst } from '../../actions/post_actions'
import Thread from './thread';

const mapStateToProps = (state, ownProps) => ({
    thread: state.entities.threads[0],
    user: Boolean(state.ui.session.id),
    usrId: state.ui.session.id,
    post: state.entities.posts
})

const mapDispatchToProps = (dispatch) => ({
    bringThread: (id) => dispatch(bringThread(id)),
    removePost: (id) => dispatch(deletePst(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
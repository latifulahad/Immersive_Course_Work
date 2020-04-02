import { connect } from 'react-redux';
import { bringThreads } from '../../actions/threads_actions'
import Thread from './thread';

const mapStateToProps = (state, ownProps) => {
    let ans
    let threads = state.entities.threads;
    threads.forEach(td => { td.id === ownProps.match.params.id ? ans = td : true })
    return { thread: ans }
}

const mapDispatchToProps = (dispatch) => ({
    bringThreads: () => dispatch(bringThreads())
})

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
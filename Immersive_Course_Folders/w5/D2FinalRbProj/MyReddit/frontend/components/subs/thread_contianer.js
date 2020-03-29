import { connect } from 'react-redux';
import { bringThreads } from '../../actions/threads_actions'
import Threads from './threads';

const mapStateToProps = (state) => ({
    threads: state.entities.threads
})

const mapDispatchToProps = (dispatch) => ({
    bringThreads: () => dispatch(bringThreads())
})

export default connect(mapStateToProps, mapDispatchToProps)(Threads);
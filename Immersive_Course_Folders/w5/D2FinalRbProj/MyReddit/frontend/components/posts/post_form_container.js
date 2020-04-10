import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'

const mapStateToProps = (state) => ({
    usrId: state.ui.session.id
}
)
const mapDispatchToProps = (dispatch) => ({
    sendPost: (info) => dispatch(createPost(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
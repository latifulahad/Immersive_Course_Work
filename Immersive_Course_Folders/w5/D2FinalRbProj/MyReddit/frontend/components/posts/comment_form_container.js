import { connect } from 'react-redux';

import { makeComment } from '../../actions/comment_action';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
    auth_id: state.ui.session.id,
    pCmtId: ownProps.parentId
})

const mapDispatchToProps = (dispatch) => ({
    sendComment: (info) => dispatch(makeComment(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

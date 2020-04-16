import { connect } from 'react-redux';
import { findDaRtCmts } from '../../reducers/selectors';
import { bringCmts } from '../../actions/comment_action';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
   post: state.entities.posts[ownProps.match.params.postId],
   cmts: state.entities.comments,
   auth_id: Boolean(state.ui.session.id)
})

const mapDispatchToProps = (dispatch, ownProps) => {
    let pstId = ownProps.match.params.postId;

    return({
        bringComments: () => dispatch(bringCmts(pstId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

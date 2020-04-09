import { connect } from 'react-redux';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
   post: state.entities.posts[ownProps.match.params.postId]
})

const mapDispatchToProps = (dispatch) => ({
    other: ""
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);

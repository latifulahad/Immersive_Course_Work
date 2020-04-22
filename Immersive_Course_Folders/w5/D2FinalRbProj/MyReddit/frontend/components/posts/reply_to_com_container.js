import { connect } from 'react-redux';
import ReplyToCom from './reply_to_com';

const mapStateToProps = (state, ownProps) => {
    let cmt = state.entities.comments[ownProps.match.params.cmtId];
    
    return({
        parentCmtId: cmt.id,
        heading: cmt.content,
        subCmts: cmt.child_comments,
        usr: Boolean(state.ui.session.id)
    })
}

export default connect(mapStateToProps)(ReplyToCom);
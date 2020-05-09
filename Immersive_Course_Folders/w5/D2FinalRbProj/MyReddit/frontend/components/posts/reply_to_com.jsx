import React from "react";
import CommentFormContainer from './comment_form_container';

class ReplyToCom extends React.Component {

    render() {
        let cmtForm
        let childCmts = this.props.subCmts.map((cmt, idx) => {
            return(<li key={idx}>{cmt.content}</li>) //WE NEED ASYNC FUNC 4 AUTHORname
        })

        if(this.props.usr) { cmtForm = <CommentFormContainer parentId={this.props.parentCmtId} />} 

        return(
            <div>
                <h2>{this.props.heading}</h2>
                    <br></br>
                <label>Responses</label>
                <ul>
                    {childCmts}
                </ul>
                    <br></br>
                {cmtForm}
            </div>
        )
    }
}

export default ReplyToCom;
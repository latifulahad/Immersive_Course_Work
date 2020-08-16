import React from "react";
import CommentFormContainer from './comment_form_container';

import { bringNames } from '../../utils/ajax_func';

class ReplyToCom extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: [] };
    }

    componentDidMount() {
        let id = this.props.parentCmtId;
        bringNames(id).then(res => this.setState({ name: res.names }))
    }

    componentDidUpdate() {
        let id = this.props.parentCmtId;
        bringNames(id).then(res => this.setState({ name: res.names }))
    }

    render() {
        let st = this.state.name;
        
        let cmtForm
        let childCmts = this.props.subCmts.map((cmt, idx) => {
            return(<li key={idx}>{cmt.content.concat(` by ${st[idx]}`)}</li>)
        })

        if(this.props.usr) { cmtForm = <CommentFormContainer parentId={this.props.parentCmtId} />} 

        return(
            <div className="content-reply">
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
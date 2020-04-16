import React from "react";
import CommentFormContainer from './comment_form_container';

class Post extends React.Component {
    componentDidMount() {
        this.props.bringComments();
    }

    render() {
        let comts = this.props.cmts.map((cmt, idx) => {
            return (<li key={idx}>{cmt.content}</li>)
        })
        let cmtFrom;
        if(this.props.auth_id) { cmtFrom = <CommentFormContainer /> }
        
        return(
            <div className="content-post">
                <h2>Content</h2>
                <p>{this.props.post.content} </p>
                    <br></br>
                <ul>
                    Comments
                   {comts} 
                </ul>
                    <br></br>
                
                {cmtFrom}
            </div>
        )
    }

}

export default Post;
import React from "react";
import CommentFormContainer from './comment_form_container';
import { Link } from 'react-router-dom';
import { authorName } from '../../utils/ajax_func';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "" }
    }
    
    componentDidMount() {
        this.props.bringComments();
        authorName(this.props.post.author_id).then(res => this.setState({ name: res.name }))
    }

    render() {
        let trdId = this.props.match.params.id;
        let pstId = this.props.match.params.postId;
        let rplyLnk;

        let comts = this.props.cmts.map((cmt, idx) => {
            if (this.props.auth_id) { rplyLnk = <Link style={{ marginLeft: 3 }} to={`/thread/${trdId}/post/${pstId}/comment/${idx}`}>Reply</Link> }
            return (<li key={idx}>
                {cmt.content.concat(` by ${cmt.authorName} `)}
                {rplyLnk}
            </li>)
        })
        let cmtFrom;
        if(this.props.auth_id) { cmtFrom = <CommentFormContainer /> }

        return(
            <div className="content-post">
                <h2>Content</h2>
                <p>{this.props.post.content} by {this.state.name}</p>
                    <br></br>
                <ul>
                    <cmt>Comments</cmt>
                   {comts} 
                </ul>
                    <br></br>
                
                {cmtFrom}
            </div>
        )
    }

}

export default Post;
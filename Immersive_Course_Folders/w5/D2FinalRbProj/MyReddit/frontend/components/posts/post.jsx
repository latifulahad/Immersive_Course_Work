import React from "react";

class Post extends React.Component {

    componentDidMount() {
        this.props.bringComments();
    }

    render() {
        let comts = this.props.cmts.map((cmt, idx) => {
            return (<li key={idx}>{cmt.content}</li>)
        })

        return(
            <div className="content-post">
                <h2>Content</h2>
                <p>{this.props.post.content} </p>
                    <br></br>
                <ul>
                    Comments
                   {comts} 
                </ul>
            </div>
        )
    }

}

export default Post;
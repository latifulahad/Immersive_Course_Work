import React from "react";

class Post extends React.Component {

    render() {
        
        return(
            <div className="content-post">
                <h2>Content</h2>
                    <br></br>
                <p>{this.props.post.content} </p>

                <ul></ul>
            </div>
        )
    }

}

export default Post;
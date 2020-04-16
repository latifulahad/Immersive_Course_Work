import React from "react"
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { author_id: props.auth_id, post_id: props.match.params.postId, content: "" }
        this.upd = this.upd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }
    
    upd(arg) {
        return e => this.setState({ [arg]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();

        this.sendComment(this.state)
    }

    render() {
        return(
            <form>
                <label>Add Comment</label>
                <br></br>
                <input type="text" onChange={this.upd("content")} value={this.state.content} />
                <br></br>
                <button onClick={this.handleSub}>Submit</button>
            </form>
        )
    }
}

export default withRouter(CommentForm);
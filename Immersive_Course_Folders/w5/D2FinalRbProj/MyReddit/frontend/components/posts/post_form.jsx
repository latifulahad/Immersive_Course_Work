import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { title: "", link: this.props.match.params.id, content: "", author_id: this.props.usrId }
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    update(ky) {
        return e => this.setState({ [ky]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();

        this.props.sendPost(this.state).then(res => this.props.history.push(`/thread/${res.post.subId}`))
    }

    render() {
        return(
            <form>
                <label>
                    Title
                    <input type="text" onChange={this.update("title")}/>
                </label>
                    <br></br>
                <label>
                    Content
                    <input type="text" onChange={this.update("content")}/>
                </label>
                    <br></br>
                <button onClick={this.handleSub}>POST</button>
            </form>
        )
    }
}

export default PostForm;
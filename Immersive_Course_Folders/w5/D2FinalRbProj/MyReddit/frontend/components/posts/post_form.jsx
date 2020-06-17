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

            <form className="form-fieldset">
                <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Make a Post</h2>

                <div className="input">
                    <label>Title</label>
                    <input type="text" onChange={this.update("title")} />
                </div>
                
                <div className="input">
                    <label>Content</label>
                    <input type="text" onChange={this.update("content")} />
                </div>
                
                <button className="button" onClick={this.handleSub}>Post</button>
            </form>
        )
    }
}

export default PostForm;
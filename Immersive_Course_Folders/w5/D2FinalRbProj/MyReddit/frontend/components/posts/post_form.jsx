import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { title: "", link: this.props.match.params.id, content: "", author_id: this.props.usrId }
    }
    render() {
        return(
            <form>

            </form>
        )
    }
}

export default PostForm;
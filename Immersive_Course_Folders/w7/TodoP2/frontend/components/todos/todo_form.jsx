import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    updateTitle(evt) {
        this.setState({ title: evt.target.value });
    }

    updateBody(evt) {
        this.setState({ body: evt.target.value });
    }

    addToList(evt) {
        evt.preventDefault();

        const todo = { id: this.props.id, title: this.state.title, body: this.state.body, done: false };

        this.props.receiveTodo(todo);

        this.setState({
            title: "",
            body: ""
        }); // reset form
    }

    render() {

        return (
            <form onSubmit={this.addToList}>

                <label>
                    <input onChange={this.updateTitle} value={this.state.title} />
                    Title
            </label>

                <label>
                    <textarea onChange={this.updateBody} value={this.state.body}></textarea>
                    Body
            </label>

                <button>Submit</button>
            </form>
        )
    }

}

export default TodoForm;
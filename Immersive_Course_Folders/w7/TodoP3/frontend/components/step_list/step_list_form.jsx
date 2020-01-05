import React from 'react';

class StepListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.createForm = this.createForm.bind(this);
    }

    updateTitle(evt) {
        this.setState({ title: evt.target.value });
    }

    createForm(evt) {
        evt.preventDefault();
        
        const step = { title: this.state.title, done: this.state.done, todo_id: this.props.todo_id };
        this.props.receiveStep(step, this.props.todo_id)
        this.setState({
            title: ""
        });
    }
    
    render() {

        return(
        <form onSubmit={this.createForm}>
            <label>
                <input onChange={this.updateTitle} value={this.state.title}/>
                Title
            </label>

            <button>Submit</button>
        </form>
        )
    }
}

export default StepListForm
import React from "react";
import { withRouter } from 'react-router-dom';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "", password: "" };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    componentDidMount() {
        if(this.props.errors.length) { this.props.cleanErr(); }
    }

    update(proper) {
        return e => this.setState({ [proper]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();
        let his = this.props.history;
        this.props.sendUser(this.state).then(res => his.push(`/users/${res.id}`))
    }

    render() {
        let errors;
        errors = this.props.errors.forEach((er, id) => {
            return (<li key={id}>{er}</li>)
        })

        return (
            <section>
                <h2>Create Account</h2>
                <form onSubmit={this.handleSub}>
                    Name
                    <input type="text" onChange={this.update("name")} value={this.state.name} />
                        <br></br>
                    Email
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                        <br></br>
                    Password
                    <input type="text" onChange={this.update("password")} value={this.state.password} />
                        <br></br>
                    <button>Register</button>
                </form>

                <ul>{errors}</ul>
            </section>
        )
    }
}

export default withRouter(CreateUser);
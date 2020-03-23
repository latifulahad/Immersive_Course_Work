import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }

       this.update = this.update.bind(this);
       this.handleSub = this.handleSub.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();

        this.props.loginUser(this.state).then(res => this.props.history.push(`/users/${res.id}`));
    }

    render() {

        return(
            <form onSubmit={this.handleSub}>
                <h2>Login</h2>
                
                <label>
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                    Email
                </label>
                    <br></br>
                <label>
                    <input type="text" onChange={this.update("password")} value={this.state.passowrd} />
                    Password
                </label>
                    <br></br>
                <button>Submit</button>
            </form>
        )
    }
}

export default withRouter(LoginForm);
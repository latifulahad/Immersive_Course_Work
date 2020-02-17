import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

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

    handleSub() {
        this.props.loginUser(this.state).then(res => this.props.history.push(`/users/${res.id}`))
    }
    
    render() {

        return(
            <div>
                <form onSubmit={this.handleSub}>
                    <label>
                        <input type="text" onChange={this.update("email")} value={this.state.email} />
                        Email
                    </label>
                    <label>
                        <input type="text" onChange={this.update("password")} value={this.state.passowrd} />
                        Password
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);
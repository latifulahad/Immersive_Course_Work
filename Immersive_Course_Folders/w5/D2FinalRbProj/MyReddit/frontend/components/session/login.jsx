import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "" };
        this.update = this.update.bind(this);
    }

    update(attr) {
        return e => this.setState({ [attr]: e.target.value })
    }
    
    render() {
        return(
            <form>
                <label>
                    Email
                    <input onClick={this.update("email")} />
                </label>
                    <br></br>
                <label>
                    Password
                    <input onClick={this.update("password")} />
                </label>
                    <br></br>
                <button onClick={this.props.}>Enter</button>
            </form>
        )
    }
}

export default Login;
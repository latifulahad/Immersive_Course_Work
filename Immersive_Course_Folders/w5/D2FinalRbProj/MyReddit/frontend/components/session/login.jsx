import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "" };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    update(attr) {
        return e => this.setState({ [attr]: e.target.value })
    }
    
    handleSub(evt) {
        evt.preventDefault();

        this.props.login(this.state).then(res => this.props.history.push("/"))
    }

    render() {
        return(
            <form>
                <label>
                    Email
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                </label>
                    <br></br>
                <label>
                    Password
                    <input type="text" onChange={this.update("password")} value={this.state.password}/>
                </label>
                    <br></br>
                <button className="button" onClick={this.handleSub}>Enter</button>
            </form>
        )
    }
}

export default Login;
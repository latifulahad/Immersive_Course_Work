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

        this.props.login(this.state).then(res => {
            if(!res.error) { 
                this.props.history.push("/") 
            } else {
                //WRITE LOGIC HERE!!! ERASE COMPONANT STATE && ADD HTML COMP 2 RENDER ERR_MSG
            }
        })
    }

    render() {
        return(
            <form className="form">
                <fieldset className="form-fieldset">
                    <h2 style={{paddingBottom: 10, fontSize: 24 }}>Log In</h2>
                    

                    <div className="input">
                        <label>Email</label>
                        <input type="text" onChange={this.update("email")} value={this.state.email} />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="password" onChange={this.update("password")} value={this.state.password} />
                    </div>
                    
                    <button className="button" onClick={this.handleSub}>Enter</button>
                </fieldset>
            </form>
        )
    }
}

export default Login;
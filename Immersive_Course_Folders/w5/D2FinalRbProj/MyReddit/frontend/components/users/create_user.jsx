import React from 'react';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "", password: "" };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    update(attr) {
        return e => this.setState({ [attr]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();

        this.props.mkUser(this.state).then(res => {
            if(res.id) {
                this.props.history.push("/")
            }
        })
    }

    render() {
        return (
            <form className="form-fieldset">

                <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Create Account</h2>
                <p>{this.props.errors}</p> 

                <div className="input">
                    <label>Name</label>
                    <input type="text" onChange={this.update("name")} value={this.state.name} />
                </div>
                <div className="input">
                    <label>Email</label>
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                </div>    
                    
                <div className="input"> 
                    <label>Password</label>
                    <input type="password" onChange={this.update("password")} value={this.state.password} />
                </div>                            
                
                <button className="button" onClick={this.handleSub}>Enter</button>
            </form>
        )
    }
}

export default CreateUser;
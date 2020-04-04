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

        this.props.mkUser(this.state).then(res => this.props.history.push("/"))
    }

    render() {
        return (
            <form>
                <label>
                    Name
                    <input type="text" onChange={this.update("name")} value={this.state.name} />
                </label>
                    <br></br>
                <label>
                    Email
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                </label>
                    <br></br>
                <label>
                    Password
                    <input type="text" onChange={this.update("password")} value={this.state.password} />
                </label>
                    <br></br>
                <button className="button" onClick={this.handleSub}>Enter</button>
            </form>
        )
    }
}

export default CreateUser;
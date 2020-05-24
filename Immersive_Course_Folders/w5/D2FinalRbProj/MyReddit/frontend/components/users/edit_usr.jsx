import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "" };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    componentDidMount() {
        let id = this.props.wntId;
        
        this.props.bringData(id).then(res => {
            this.setState({ email: res.email })
        })
    }

    update(attr) {
        return e => this.setState({ [attr]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();
        let id = this.props.wntId;

        // this.props.bringData(id).then(res => this.props.history.push("/")) NEED ASYNC 2 HANDLE CHANGES!!!
    }

    render() {
        return (
            <form>

                <h2>Edit Account</h2>
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

export default EditUser;
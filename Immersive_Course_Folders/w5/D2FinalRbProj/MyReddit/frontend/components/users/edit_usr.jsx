import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "", newPass: "", dupNew: "", err: "" };
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
        
        if (this.state.newPass === this.state.dupNew) {
            this.props.sendUsrInfo(id, { user: this.state }).then(res => this.props.history.push("/"))
        } else {
            this.setState({ err: "The NewPassword doesn't match Verify" })
        }
        
    }

    render() {
        return (
            <form className="form-fieldset">

                <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Edit Account</h2>
                <p style={{ color: "red" }}>{this.state.err}</p>

                <div className="input">
                    <label>Email</label>
                    <input type="text" onChange={this.update("email")} value={this.state.email} />
                </div>

                <div className="input">
                    <label>Old Password</label>
                    <input type="password" onChange={this.update("password")} value={this.state.password} />
                </div>

                <div className="input">
                    <label> New Password</label>
                    <input type="password" onChange={this.update("newPass")} value={this.state.newPass} />
                </div>

                <div className="input">
                    <label>Verfiy Password</label>
                    <input type="password" onChange={this.update("dupNew")} value={this.state.dupNew} />
                </div>

                <button className="button" onClick={this.handleSub}>Enter</button>
            </form>
        )
    }
}

export default EditUser;
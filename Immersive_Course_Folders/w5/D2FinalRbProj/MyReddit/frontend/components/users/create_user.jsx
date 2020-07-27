import React from 'react';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "", password: "", classNm: "modal on" };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.modalOff = this.modalOff.bind(this);
    }

    update(attr) {
        return e => this.setState({ [attr]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();
        let wntedKys = ["name", "email", "password"];
        let reqObj = {};

        wntedKys.forEach(ky => reqObj[`${ky}`] = this.state[`${ky}`] )

        this.props.mkUser(reqObj).then(res => {
            if(res.id) {
                this.props.history.push("/")
            }
        })
    }

    modalOff(evt) {
        evt.preventDefault();
        if(this.state["classNm"] === "modal on") { this.props.history.push("/")}
    }

    render() {
        return (
            <div className={this.state["classNm"]}>
                <form className="form-fieldset create">

                    <span onClick={this.modalOff} className="modal-close">&times;</span>

                    <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Create Account</h2>
                    <p style={{ color: "red" }}>{this.props.errors}</p>

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

                    <button className="button enter" onClick={this.handleSub}>Enter</button>
                    <button className="button" onClick={this.modalOff} >Close</button>
                </form>

                <div className="modal-screen"></div>
            </div>
        )
    }
}

export default CreateUser;
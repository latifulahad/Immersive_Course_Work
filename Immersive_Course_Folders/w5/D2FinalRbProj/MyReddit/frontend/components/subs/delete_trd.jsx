import React from 'react';
import { deletePost } from './../../utils/ajax_func';

class DeleteTrd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: "", classNm: "modal on", errors: "" };

        this.update = this.update.bind(this);
        this.modalOff = this.modalOff.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    update(ky) {
        return e => this.setState({ [ky]: e.target.value })
    }

    modalOff(evt) {
        evt.preventDefault();

        if (this.state["classNm"] === "modal on") { this.props.history.push(`/thread/${this.props.trdId}`) }
    }

    handleSub(evt) {
        evt.preventDefault();
        let reqObj = { id: this.props.trdId, usrId: this.props.userId, password: this.state.password }

        deletePost(reqObj).then(res => {
            if (res.success) {
                this.props.history.push('/');
            } else {
                this.setState({ errors: res.err })
            }
        })  
    }

    render() {

        return(
            <div className="modal on">
                <form className="form-fieldset create">

                    <span onClick={this.modalOff} className="modal-close">&times;</span>

                    <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Varify Password</h2>
                    <p style={{ color: "red" }}>{this.state.errors}</p>

                    <div className="input">
                        <input type="text" onChange={this.update("password")} value={this.state.password} />
                    </div>
                    
                    <button className="button enter" onClick={this.handleSub}>Enter</button>
                    <button className="button" onClick={this.modalOff} >Close</button>
                </form>

                <div className="modal-screen"></div>
            </div>
        )
    } 
} 

export default DeleteTrd;
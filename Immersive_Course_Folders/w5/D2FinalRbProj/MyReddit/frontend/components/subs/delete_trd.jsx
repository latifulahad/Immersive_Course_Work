import React from 'react';

class DeleteTrd extends React.Component {
    constructor(props) {
        this.state = { pass: "", classNm: "modal on" };

        this.update = this.update.bind(this);
        this.modalOff = this.modalOff.bind(this);
    }

    update(ky) {
        return e => this.setState({ [ky]: e.target.value })
    }

    modalOff(evt) {
        evt.preventDefault();
        if (this.state["classNm"] === "modal on") { this.props.history.push(`/thread/${this.props.trdId}`) }
    }

    render() {

        return(
            <div className="modal on">
                <form className="form-fieldset create">

                    <span onClick={this.modalOff} className="modal-close">&times;</span>

                    <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Varify Password</h2>
                    <p style={{ color: "red" }}>{this.props.errors}</p>

                    <div className="input">
                        <input type="text" onChange={this.update("pass")} value={this.state.name} />
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
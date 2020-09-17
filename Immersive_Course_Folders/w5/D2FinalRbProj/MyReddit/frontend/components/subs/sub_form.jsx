import React from "react";

class CreateSub extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { title: "", description: "", moderator: props.usrId }

        this.handleSub = this.handleSub.bind(this);
        this.update = this.update.bind(this);
    }
    
    handleSub(evt) {
        evt.preventDefault();
    
        this.props.sendData(this.state).then(res => {
            if(res.success) {
                this.props.bringThreads(); 
                this.props.history.push("/");
            } else {

            }
        })
    }

    update(ky) {
        return e => this.setState({ [ky]: e.target.value })
    }

    render() {
        return( 
            <form className="form-fieldset">
                <h2 style={{ paddingBottom: 10, fontSize: 24 }}>Start a Thread</h2>

                <div className="input">
                    <label>Title</label>
                    <input type="text" onChange={this.update("title")} />
                </div>

                <div className="input subDes">
                    <label>Description</label>
                    <input type="text" onChange={this.update("description")} />
                </div>

                <button className="button" onClick={this.handleSub}>Post</button>
            </form>
        )
    }
}

export default CreateSub;
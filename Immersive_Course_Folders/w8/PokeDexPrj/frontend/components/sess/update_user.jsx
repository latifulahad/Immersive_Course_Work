import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "" , password: "" , id: this.props.match.params.id };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    componentDidMount() {
        if(this.props.errors.length) { this.props.cleanErr(); }
    }

    update(proper) {
        return e => this.setState({ [proper]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();
        this.props.sendChanges(this.state);
    }

    render() {
        let errors;
         errors = this.props.errors.forEach((er, id) => {
            return(<li key={id}>{er}</li>)
        })

        return(
            <section>
                <form onSubmit={this.handleSub}>
                    Name
                    <input type="text" onChange={this.update("name")} value={this.state.name} placeholder={this.props.person.name}/>
                        <br></br>
                    <p>Old Email {this.props.person.email}</p>
                    Email
                    <input type="text" onChange={this.update("email")} value={this.state.email}/>
                        <br></br>
                    Password
                    <input type="text" onChange={this.update("password")} value={this.state.password}/>
                        <br></br>
                    <button>Change</button>
                </form>
                
                <ul>{errors}</ul>
            </section>
        )
    }
}

export default UpdateUser;
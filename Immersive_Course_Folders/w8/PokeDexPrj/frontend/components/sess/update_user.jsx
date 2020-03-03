import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: props.person.name, email: props.person.email, password: "" , id: props.match.userId };
        this.update = this.update.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    update(proper) {
        return e => this.setState({ [proper]: e.target.value })
    }

    handleSub(evt) {
        evt.preventDefault();
    
        this.props.sendChanges(data);
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
                    <input type="text" onChange={this.update("name")} value={this.state.name}/>
                    Email
                    <input type="text" onChange={this.update("email")} value={this.state.email}/>
                    Password
                    <input type="text" onChange={this.update("password")} value={this.state.password}/>

                    <button>Change</button>
                </form>

                <ul>{errors}</ul>
            </section>
        )
    }
}

export default withRouter(UpdateUser);
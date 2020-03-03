import React from 'react';
import { withRouter } from 'react-router-dom';
import UpdateUserContainer from './update_user_container';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { runC: "false" }
        this.handleUp = this.handleUp.bind(this);
    }

    componentDidMount() {
        this.props.loadUser(this.props.wntId);
    }

    componentDidUpdate() {
        if(!this.props.person.name) { this.props.history.push('/') }
    }

    handleUp(evt) {
        evt.preventDefault();

        this.state.runC ? this.setState({ runC: false }) : this.setState({ runC: true })
    }

    render() {
        let updBtn;
        updBtn =  this.state.runC ? <UpdateUserContainer dude={this.props.person}/> : ""

        return(
            <div>
                <h2>{this.props.person.name}</h2>
                {updBtn}
                <button onClick={this.props.logOut}>Log-Out</button>
            </div>
        )
    }
}

export default withRouter(ShowUser);

import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import UpdateUserContainer from './update_user_container';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { runC: "false" }
    }

    componentDidMount() {
        this.props.loadUser(this.props.wntId);
    }

    componentDidUpdate() {
        if(!this.props.person.name) { this.props.history.push('/') }
    }

    render() {
        let updFrm;
        updFrm = this.props.person ? <Link to={`/userUp/${this.props.wntId}`}>Update User</Link> : ""

        return(
            <div>
                <h2>{this.props.person.name}</h2>
                {updFrm}

                <button onClick={this.props.logOut}>Log-Out</button>
            </div>
        )
    }
}

export default withRouter(ShowUser);

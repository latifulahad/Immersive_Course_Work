import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowUser extends React.Component {

    componentDidMount() {
        this.props.loadUser(this.props.wntId);
    }

    render() {

        return(
            <div>
                <h2>{this.props.person.name}</h2>
                <button onClick={this.props.logOut}>Log-out</button>
            </div>
        )
    }
}

export default withRouter(ShowUser);

import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowUser extends React.Component {

    componentDidMount() {
        this.props.loadUser(this.props.wntId);
    }

    componentDidUpdate() {
        if(!this.props.person.name) { this.props.history.push('/') }
    }

    render() {
        let val = this.props.person.name ? <button onClick={this.props.logOut}>Log-Out</button> : "";

        return(
            <div>
                <h2>{this.props.person.name}</h2>
                {val}
            </div>
        )
    }
}

export default withRouter(ShowUser);

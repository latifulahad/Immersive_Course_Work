import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { runC: "false" }
        this.handleDel = this.handleDel.bind(this);
    }

    componentDidMount() {
        this.props.loadUser(this.props.wntId);
    }

    componentDidUpdate() {
        if(!this.props.person.name) { this.props.history.push('/') }
    }

    handleDel(evt) {
        evt.preventDefault();

        this.props.rmUser().then(res => this.props.history.push('/'))
    }

    render() {
        let updFrm;
        updFrm = this.props.person ? <Link to={`/userUp/${this.props.wntId}`}>Update User</Link> : ""

        return(
            <div>
                <h2>{this.props.person.name}</h2>
                {updFrm}

                <button onClick={this.props.logOut}>Log-Out</button>
                <button onClick={this.handleDel}>DELETE-ACCOUNT!</button>
            </div>
        )
    }
}

export default withRouter(ShowUser);

import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { runC: "false" }
        this.handleDel = this.handleDel.bind(this);
    }

    componentDidMount() {
        if(this.props.sessId === parseInt(this.props.wntId)) {
            this.props.loadUser(this.props.wntId);
        } else {
            this.props.history.push('/getSome');
        }
    }

    componentDidUpdate() {
        if(!this.props.person.name) { this.props.history.push('/') }
    }

    handleDel(evt) {
        evt.preventDefault();

        this.props.rmUser().then(res => this.props.history.push('/'))
    }

    render() {
        window.num = this.props.match.params.userId;
        
        return(
            <div>
                <h2>{this.props.person.name}</h2>
                <Link to={`/userUp/${this.props.wntId}`}>Update User</Link>
                    <br></br>
                <button onClick={this.props.logOut}>Log-Out</button>
                    <br></br>
                <button onClick={this.handleDel}>DELETE-ACCOUNT!</button>
            </div>
        )
    }
}

export default ShowUser;

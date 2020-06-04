import React from 'react';
import { withRouter } from 'react-router-dom';

class LogOut extends React.Component {
    constructor(props) {
        super(props)

        this.handleSub = this.handleSub.bind(this)
    }

    handleSub() {
        this.props.func();
        this.props.history.push("/");
    }
    
    render() {
        return(
            <button style={{marginRight: 3}} onClick={this.handleSub}>Log Out</button>
        )
    }
}

export default withRouter(LogOut);
import React from 'react';

class ShowUser extends React.Component {
    
    componentDidMount() {
        this.props.loadUser()
    }
    
    render() {
        return(
            <div>
                <h2>{this.props.user.name}</h2>
            </div>
        )
    }
}

export default ShowUser;
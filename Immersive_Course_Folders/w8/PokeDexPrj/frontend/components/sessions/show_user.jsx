import React from 'react';

class ShowUser extends React.Component {
    
    componentDidMount() {
        this.props.loadUser(this.props.userId)
    }
    
    render() {
        return(
            <div>
                <h2>{this.props.person.name}</h2>
            </div>
        )
    }
}

export default ShowUser;
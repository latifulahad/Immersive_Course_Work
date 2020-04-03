import React from 'react';

class Thread extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.bringThread(id);
    }

    render() {
            let thrd = this.props.thread;

        return(
            <div className="content-thread">
                <h2>Description</h2>
                <p>{thrd.description} by {thrd.author}</p>
            </div>
        )   
    }   
} 

export default Thread;
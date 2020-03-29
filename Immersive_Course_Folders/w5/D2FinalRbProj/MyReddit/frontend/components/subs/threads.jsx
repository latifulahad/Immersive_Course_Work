import React from 'react';

class Threads extends React.Component {

    componentDidMount() {
        this.props.bringThreads();
    }

    render() {
        let thrds = this.props.threads.map((trd, idx) => (
          <li key={idx}>{trd.title}</li>  
        ))

        return(
            <ul className="thread-list">
                {thrds}
            </ul>    
        )   
    }   
} 

export default Threads;
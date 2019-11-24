import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: new Date() });
    }

    render() {
        let hrs = this.state.time.getHours();
        let mins = this.state.time.getMinutes(); 
        let secs = this.state.time.getSeconds();
        let date = this.state.time.toDateString();

        return(
            <div>
                <h2>Clock</h2>
                <span>Date {date}</span>
                <br />
                <span>Time {hrs}: {mins}: {secs}</span>
            </div>
        )
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

}

export default Clock;
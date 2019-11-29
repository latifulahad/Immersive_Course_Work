import React from 'react';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
}

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { weather: "" };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.displayLoc.bind(this));
    }

    displayLoc(locat) {
        const a = locat.coords.latitude;
        const b = locat.coords.longitude; 
        const para = {lat: a, lon: b};
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        url += toQueryString(para);
        let ndedKey = 'c5e363f20f12b70a84c'; //Complete K_in_nts
        url += `&APPID=${ndedKey}`;
        
        const reqObj = new XMLHttpRequest();
        
        reqObj.open('GET', url, true)
        reqObj.onreadystatechange = (evt) => {
            if (reqObj.status === 200 && reqObj.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(reqObj.responseText);
                this.setState({weather: data});
             } 
        };

        reqObj.send();
    }
    
    render() {
        let content = <div></div>;
        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;

            content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} degrees</p>
            </div>;
        } else {
            content = <div>loading weather...</div>;
        }

        return (
            <div>
                <h1>Weather</h1>
                <div>{content}</div>
            </div>
        );

    }
}

export default Weather;

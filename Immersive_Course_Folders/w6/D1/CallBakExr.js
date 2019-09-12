class Clock {
    constructor() {
        const dateObj = new Date();

        this.hours = dateObj.getHours();
        this.minutes = dateObj.getMinutes();
        this.seconds = dateObj.getSeconds();
        
        // setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        if(this.seconds < 60) {
            this.seconds += 1;
        } else {
            this.seconds = 1;
            this.incrementMinute();
        }
    }

    incrementMinute() {
        if (this.minutes < 60) {
            this.minutes += 1;
        } else {
            this.minutes = 1;
            this.incrementHours();
        }
    }
    
    incrementHours() {
        this.hours += 1;
        if(this.hours === 24) {
            this.hours = 0;
        }
    }
}
//Tests vvv
// const clock = new Clock();
// clock.printTime(); //Works
/**
 * Created by andriipolonskyi on 30.11.2017.
 */
'use strict'

class Timer {
    constructor(){
        this.counter =0;
    }

    startTimer (speeding=1) {
        this.timer = setInterval(() => this.counter++, 1000/speeding);
    }

    stopTimer  () {
        clearInterval(this.timer);
    };

    init  (startTime = 0, callback) {
        this.counter = startTime;
        if (typeof callback === 'function')
            callback();
    };

    getTime  ()  {
        let minutes = Math.floor(this.counter / 60);
        let seconds = this.counter % 60;
        return{
            minutes,
            seconds
        }
    };

    start  (speeding = 1, callback) {
        this.startTimer(speeding);
        if (typeof callback === 'function') {
            this.interval = setInterval(
                () => callback(this.getTime()), 1000 / speeding);
        }
    };

    pause (callback)  {
        if (typeof callback === 'function') {
            this.stopTimer();
            clearInterval(this.interval);
            callback(this.getTime())
        }
    };
    stop  (callback)  {
        this.stopTimer();
        clearInterval(this.interval);
        callback(this.getTime());
        this.counter = 0;
    };

}

export default Timer;


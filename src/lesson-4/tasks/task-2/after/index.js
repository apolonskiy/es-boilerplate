/**
 * Created by andriipolonskyi on 16.11.2017.
 */

'use strict'

let Timer = () => {
    let counter;
    let interval;
    let timer;

    let startTimer = (speeding=1) => {
        timer = setInterval(() => counter++, 1000/speeding);
    };

    let stopTimer = () => {
        clearInterval(timer);
    };

    let init = (startTime = 0, callback) => {
        counter = startTime;
        if (typeof callback === 'function')
            callback();
    };

    let getTime = () => {
        let minutes = Math.floor(counter / 60);
        let seconds = counter % 60;
        return{
            minutes,
            seconds
        }
    };

    let start = (speeding = 1, callback) => {
        startTimer(speeding);
        if (typeof callback === 'function') {
            interval = setInterval(
                () => callback(getTime()), 1000 / speeding);
        }
    };

    let pause = (callback) => {
        if (typeof callback === 'function') {
            stopTimer();
            clearInterval(interval);
            callback(getTime())
        }
    };
    let stop = (callback) => {
        stopTimer();
        clearInterval(interval);
        callback(getTime());
        counter = 0;
    };

    return {
        init: init,
        start: start,
        stop: stop,
        pause: pause
    };

}

export default Timer;


/**
 * Created by andriipolonskyi on 14.11.2017.
 */

let tos = [];

const Timer = () => new function() {
    this.seconds = 1;
    this.minutes = 0;
    this.isTimerStopped = false;


    this.init = function (startTime = 0, callback) {
        if (typeof startTime !== 'number') {
            throw  new Error("'start' is not a number")
        }
        if (typeof callback !== 'function') {
            throw  new Error("'callback' is not a function")
        }
        this.minutes = startTime;
        callback();
    };

        this.start = function (speed = 1, callback) {
                this.isTimerStopped = false;
                if (typeof speed !== 'number') {
                        throw new Error('First argument must be a number')
                    }
                if (typeof callback !== 'function') {
                        throw new Error('Second argument must be a function')
                   }
                let minuteDelay = 0, secondsDelay = 0;
                for (let currentMinute = this.minutes; currentMinute <= 60 && !this.isTimerStopped; currentMinute++) {
                        for (let currentSecond = this.seconds; currentSecond <= 60 && !this.isTimerStopped; currentSecond++) {
                                tos.push(setTimeout((() => {
                                        this.minutes = currentMinute;
                                        this.seconds = currentSecond;
                                        callback(this);
                                    }), (1000 * (secondsDelay + (minuteDelay * 60))) * speed ));
                                this.seconds = 0;
                                secondsDelay++;
                            }
                        minuteDelay++;
                    }
            };

        this.pause = function (callback){
            if (typeof callback !== 'function') {
                throw new Error('Second argument must be a function')
            }
            this.isTimerStopped = true;
            clearTos();
            callback(this);
        };

        this.stop = function (callback){
            if (typeof callback !== 'function') {
                throw new Error('Second argument must be a function')
            }
            this.isTimerStopped = true;
            clearTos();
            callback(this);
            this.minutes=0;
            this.seconds=0;
        }
}

const clearTos = ()=>{
    for(let i=0; i<tos.length; i++){
        clearTimeout(tos[i]);
    }
    tos=[];
}
export default Timer;

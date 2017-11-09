/**
 * Created by andriipolonskyi on 09.11.17.
 */

export  default func;

function sleep(k){
    return function (){
        console.log(k)
    }
}

function func (num, milisec, callback) {
    for( let n = 0; n < num; n++){
        setTimeout(sleep(callback(n)), n * milisec);
    }
}

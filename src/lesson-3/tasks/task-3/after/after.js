/**
 * Created by andriipolonskyi on 13.11.2017.
 */
'use strict';

let answ = 0;
export default ()=> (num=1) => {
    if (typeof num === "number") {

        answ += num;

    }
    else {
        throw new Error("'num' is not a number. Please, specify number.");
    }
    console.log(answ);

}




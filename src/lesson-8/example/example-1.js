'use strict';

function Temperature(degrees) {
    this.degrees = degrees;
}

const freezing = new Temperature(32);

console.log(freezing + '!'); // [object Object]!
console.log(freezing / 2); // NaN
console.log(String(freezing)); // [object Object]
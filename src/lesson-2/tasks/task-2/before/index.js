import { tag } from '../after/after';

const salary = {
    currency: 'UAH',
    amount: 10000
};
const salary1 = {  //Just added better salary :D
    currency: 'USD',
    amount: 100000
};

if (tag`Your salary is ${salary1}` === 'Your salary is 100000, and it will be paid in USD!') {
    console.log(tag`Your salary is ${salary1}`);
} else {
   throw new Error('Please correct your function!');
}

// There shouldn't be any errors in console output.
// Output should be: Your salary is 10000, and it will be paid in UAH!


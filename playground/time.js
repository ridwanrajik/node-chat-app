// Exploring time in JavaScript
let date1 = new Date();
console.log(date1); // prints 2022-09-12T20:28:59.457Z to the console. It prints today's date in that format
let months = ['Jan','Feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
console.log(date1.getMonth()) //prints 8 to the console which denotes our current month, september. Note that getMonth() returns numbers from 0 -11, which denotes Jan - Dec.
console.log(months[date1.getMonth()]) // prints sep to the console

// A better way to solve the above using a library called moment.js
let moment = require('moment');
let date2 = moment();
console.log(date2.format()); // prints 2022-09-12T21:35:10+01:00 to the console. It prints today's date in that format
console.log(date2.format('MMM')); // prints Sep to the console
console.log(date2.format('MMM YYYY')); // prints Sep 2022 to the console
// view docs at momentjs.com
console.log(date2.format('MMM Do, YYYY')); // prints Sep 12th, 2022 to the console.
date2.add(1, 'years') //add 1 year to this current year 
console.log(date2.format('MMM Do, YYYY')) // prints Sep 12th, 2023. note that the avove line added 1 year to 2022
date2.add(100, 'years').subtract(9, 'months'); //add 100 year to this current year and subtract 9 months from the current month
console.log(date2.format('MMM Do, YYYY')) // prints Dec 12th, 2122 to the console
console.log(date2.format('hh:mm a')) // prints 11:04 pm to the console
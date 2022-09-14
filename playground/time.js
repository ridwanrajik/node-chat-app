// Exploring time in JavaScript

// Note that the term timestamp is a number that corresponds to the time in seconds(in unix)/ milliseconds(in JavaScript) that is relative to a certain moment in history reffered to as the UNIX APIC which is January 1st 1970 at midnight( i.e 00:00:00 am). A timestamp of 0 corresponds the stated date and time perfectly, and a positive timestamp is relative to the date in the future, while a negative timestamp is relative to the date in the past.
let date1 = new Date();
console.log(date1); // prints 2022-09-12T20:28:59.457Z to the console. It prints today's date in that format
let timestamp1 = new Date().getTime(); // This creates the timestamp of the current time and store it in timestamp1 variable
console.log(timestamp1); // prints the timestamp of the current time to the console
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
// note that on line 14 above, moment() returns the current time by using the current time stamp by default,
// but when we pass when we pass in a time stamp as an argument into the moment() function, 
// it returns the time of the time stamp passed as argument. see example below:
let createdAt = 1234; // this is the time stamp something was created
let date3 = moment(createdAt);
console.log(date3.format('h:mm a')) // prints 1:00 am, which correspond to the time of the time stamp declared on line 28 above
let timestamp2 = moment().valueOf() // This is moment() way of creating the syntax on line 6 above. This creates the timestamp of the current time and store it in timeStamp2 variable
console.log(timestamp2) // prints the timestamp of the current time to the console
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
let index = fruits.indexOf('Banana');
let removed = fruits.splice(index,1);
console.log('fruits =', fruits);
console.log('removed =', removed);
'use strict';

let a = 5;
let b = '5';

// = =       ! =
// console.log(a == b);
// console.log(a != b);

// = = =
console.log(a === b);
// ! = =
console.log(a !== b);

console.log(a === Number(b));
//console.log(a === parseInt(b));

let gibberish = 'Joe Biden' + 2;
console.log(gibberish);

console.log(a + b);
console.log(a - b);

console.log(a - Number(b));

let nonsense = 'Joe' - 5;
console.log(nonsense, typeof nonsense);

console.log(nonsense == nonsense);
console.log(nonsense == NaN);
console.log(NaN == NaN);

console.log(isNaN(nonsense));

nonsense = nonsense + 2;
console.log(isNaN(nonsense));

console.log(('b' + 'a' + +'b' + 'a').toLowerCase());

let undefinedVariable;
let nullVariable = null;
console.log(undefinedVariable, typeof (undefinedVariable), nullVariable, typeof(nullVariable));

let newVar = null;
/*if(newVar === null || newVar === undefined) {
  console.log('newVar is not set');
}*/


/*if (newVar == null) {
  console.log('newVar is not set');
}*/

if (newVar == undefined) {
  console.log('newVar is not set');
}
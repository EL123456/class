'use strict';

let bidenIsGoodPresident = false;
let itsHotInHere = true;

console.log(bidenIsGoodPresident, itsHotInHere);

if ('') {
  console.log('we wont see this');
} else {
  console.log('empty string is false');
}

if (0) {
  console.log('we wont see this');
} else {
  console.log('0 is false');
}

// undefined, null

let foo = 1;
if (foo) {
  console.log('we wont see this');
}

if (NaN) {
  console.log('we wont see this');
} else {
  console.log('NaN is false');
}

console.log(true + 1);
console.log(typeof(true));
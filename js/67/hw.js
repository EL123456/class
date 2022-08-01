"use strict";

function ourEvery(theArray, callback) {
  for (let i = 0; i < theArray.length; i++) {
    if (!callback(theArray[i])) {
      return false;
    }
  }
  return true;

  /*let allPassed = true;
  theArray.forEach(function (elem) {
    if (!callback(elem)) {
      allPassed = false;
    }
  });

  return allPassed;*/
}

function isUpper(char) {
  return char === char.toUpperCase();
}

//const isUpper = char => char === char.toUpperCase();

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['A', 'b', 'C', 'd'];

console.log('ourEvery(upper, isUpper)', ourEvery(upper, isUpper));
console.log('ourEvery(lower, isUpper)', ourEvery(lower, isUpper));
console.log('ourEvery(mixed, isUpper)', ourEvery(mixed, isUpper));

// use real built in every
console.log('upper.every(isUpper)', upper.every(isUpper));
console.log('lower.every(isUpper)', lower.every(isUpper));
console.log('mixed.every(isUpper)', mixed.every(isUpper));

/////////////

function ourSome(theArray, callback) {
  for(let i = 0; i < theArray.length; i++) {
    if(callback(theArray[i])) {
      return true;
    }
  }
  return false;

  /*let passed = false;
  theArray.forEach(element => {
    if (callback(element)) {
      passed = true;
    }
  });

  return passed;*/
}

console.log('ourSome(upper, isUpper)', ourSome(upper, isUpper));
console.log('ourSome(lower, isUpper)', ourSome(lower, isUpper));
console.log('ourSome(mixed, isUpper)', ourSome(mixed, isUpper));

////////

function onlyIf(theArray, test, action) {
  theArray.forEach(element => {
    if(test(element)) {
      action(element);
    }
  });
}

console.log('onlyIf(mixed, isUpper, console.log)');
onlyIf(mixed, isUpper, console.log);

console.log('onlyIf(upper, isUpper, console.log)');
onlyIf(upper, isUpper, console.log);

console.log('onlyIf(lower, isUpper, console.log)');
onlyIf(lower, isUpper, console.log);

const theUppers = mixed.filter(isUpper);
theUppers.forEach(elem => console.log(elem));

mixed.filter(isUpper).forEach(elem => console.log(elem));

////////////////////////////

function multiply(a, b) {
  return a * b;
}

console.log('multiply(2,3)', multiply(2,3));

function getMultiplier() {
  return function (a, b) {
    return a * b;
  };
}

const theMultiplier = getMultiplier();
let theProduct = theMultiplier(2, 3);
console.log(theProduct);

console.log('getMultiplier()(2, 3)', getMultiplier()(2, 3));


function getMultiplier2(a) {
  return function (b) {
    return a * b;
  };
}

let multiplyBy5 = getMultiplier2(5);
theProduct = multiplyBy5(2);
console.log(theProduct);

theProduct = multiplyBy5(4);
console.log(theProduct);

const multiplyBy6 = getMultiplier2(6);
theProduct = multiplyBy6(2);
console.log(theProduct);

console.log(getMultiplier2(5)(2));
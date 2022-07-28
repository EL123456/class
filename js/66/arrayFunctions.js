'use strict';

function ourForEach(theArray, callback) {
  for (let i = 0; i < theArray.length; i++) {
    callback(theArray[i], i, theArray);
  }
}

const letters = ['a', 'b', 'c'];

function printIt(it) {
  console.log(it);
}

ourForEach(letters, printIt);
letters.forEach(printIt);

ourForEach(letters, console.log);

ourForEach(letters, function (x) {
  console.log('inline', x);
});

ourForEach(letters, x => console.log('inline arrow ', x));

/*
() => console.log(1);
a => console.log(a);
(a, b) => console.log(a, b);

function add(a, b) {
  return a + b;
}

(a, b) => a + b;

(a , b) => {
  if (a > 5) {
    a = 2;
  }

  return a + b;
};
*/

function ourFilter(theArray, test) {
  const results = [];
  /*ourForEach(theArray, x => {
    const passed = test(x);
    if (passed) {
      results.push(x);
    }
  });*/

  theArray.forEach(x => {
    if(test(x)) {
      results.push(x);
    }
  });

  return results;
}

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(n) {
  return n % 2 === 0;
  //return !(n % 2);
}

const evens = ourFilter(someNumbers, isEven);
console.log(evens);

console.log(someNumbers.filter(isEven));
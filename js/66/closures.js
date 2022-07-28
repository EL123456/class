'use strict';

greet();
function greet() {
  console.log('Hello');
}

greet();

// aFunction();
//const aFunction = function () { console.log('Im a function!'); };
//aFunction();

function getGreeter() {
  return function() {
    console.log('hello from getGreeter');
  };
}

const theGreeter = getGreeter();
theGreeter();

function getBetterGreeter() {
  return function (name) {
    console.log(`hello ${name}`);
  };
}

const theBetterGreeter = getBetterGreeter();
theBetterGreeter('Joe');
theBetterGreeter('Jill');

/*
function foo(a, b) {
  console.log(a, b);
}
foo(1, 2);
foo(1);
foo(1, 2, 3);
*/

function getBestGreeter(name) {
  return function () {
    console.log(`Shalom ${name}`);
  };
}

const theBestGreeter = getBestGreeter('Joe');
const greetKamala = getBestGreeter('Kamala');
// 10 minutes - 1000 lines code later
theBestGreeter();
greetKamala();
greetKamala();


//-------------------------
/*function a(foo) {
  let b = 5;
  bar(foo, b);
  // ....
}

function bar(x,y) {
  let z = 2;
  //....
}

a('hello');*/



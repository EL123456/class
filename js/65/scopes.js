//loosely typed
var age = 21;
console.log(age, typeof age);
age = 'hello';
console.log(age, typeof age);

//////////////////////////////////
// var x;
console.log(x);
var x = 5;
// x = 5;
console.log(x);

//console.log(z);

console.log(add(2, 2));

function add(a,b) {
  // var localX;
  console.log('in add', localX);
  var localX = 5;
  //localX = 5;
  console.log('in add2', localX);
  return a + b;
}

// console.log(localX);

console.log(add(2,2));

console.log(notLocalX);
for(var i = 0; i < 10; i++) {
  var notLocalX = i;
  console.log(notLocalX);
}
console.log(notLocalX);

///////////////////////////////

// console.log(y);
let y = 5;
console.log(y);

console.log(add2(2, 2));

function add2(a, b) {
  // console.log('in add2', localX2);
  let localX2 = 5;
  console.log('in add2 2', localX2);
  return a + b;
}

// console.log(localX2);

console.log(add2(2, 2));

// console.log(notLocalX2);
for (var i = 0; i < 10; i++) {
  let notLocalX2 = i;
  console.log(notLocalX2);
}
// console.log(notLocalX2);

const PI = 3.14;
console.log(PI);
// PI = 3.15;
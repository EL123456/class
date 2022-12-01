//(function () {
'use strict';

/*const potus = {
  first: 'Joe',
  last: 'Biden'
}*/

const potus = Object.create({
  aFunction: () => console.log('Im a function')
}, {
  first: { value: 'Joe', writable: true },
  last: { value: 'Biden', configurable: true }
});

console.log(potus);

Object.defineProperty(potus, 'age', {
  value: 88,
  writable: false
});

Object.defineProperty(potus, 'fullName', {
  get() {
    return `${this.first} ${this.last}`;
  }
});

console.log(potus.fullName);

///////////////////////

const joe = {
  first: 'Joe',
  last: 'Biden',
  print() {
    console.log(`${this.first} ${this.last}`);
  }
};

for (let property in joe) {
  if (joe.hasOwnProperty(property) && typeof (joe[property]) !== 'function') {
    console.log(`${property} is ${joe[property]}`);
  }
}

const hunter = Object.create(joe);
hunter.crimes = 50;

Object.defineProperty(hunter, 'age', {
  value: 45,
  enumerable: true
});

console.log(hunter);


for (let property in hunter) {
  if (hunter.hasOwnProperty(property) && typeof (hunter[property]) !== 'function') {
    console.log(`${property} is ${hunter[property]}`);
  }
}
//}());
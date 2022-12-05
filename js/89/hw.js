//(function () {
'use strict';

class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    age = +age;
    if (isNaN(age) || age < 0 || age > 120) {
      throw new Error('age must be a number between 0 and 120');
    }
    this._age = age;
  }

  toString() {
    //return `${this.first} ${this.last} ${this.#age}`;
    let retVal = '';
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        retVal += `${prop}: ${this[prop]} `;
      }
    }
    return retVal;
  }
}

const p = new Person('Joe', 'Biden', 1);
console.log(p.toString());
p.age = 89;
console.log(p);
console.log(`hello ${p} ${p.age}`);
p.age = '12';

class Student extends Person {
  constructor(first, last, age, grade) {
    super(first, last, age);
    this.grade = grade;
  }
}

const s = new Student('Kamala', 'Harris', 55, 0);
console.log(s.toString());
//}());

const base = {
  age: 88
};
const potus = Object.create(base);
potus.first = 'Joe',
  potus.last = 'Biden',
  potus.print = function () { console.log(`${this.first} ${this.last}`); };

Object.keys(potus).forEach(key => {
  console.log(`${key}: ${potus[key]}`);
});

Object.entries(potus).forEach(entryKeyAndValueArray => {
  console.log(`${entryKeyAndValueArray[0]}: ${entryKeyAndValueArray[1]}`);
});

Object.entries(potus).forEach(([k, v]) => {
  console.log(`----> ${k}: ${v}`);
});

/////// destructing

const numbers = [1, 2, 3, 4, 5];
//const number1 = numbers[0];
//const number3 = numbers[2];
const [, b, , c, d] = numbers;
console.log(b, c, d);

const vpotus = {
  first: 'Kamala',
  last: 'Harris',
  age: 55
};

//const first = vpotus.first;
//const last = vpotus.last;
//const age = vpotus.age;
const foo = 6;
const { age = 5, first: f } = vpotus;
console.log(f, age, foo);

// spread
function print(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
//const [v, w, x, y, z] = numbers;
//print(v, w, x, y, z/*, 6, 7, 8*/);
print(...numbers);

console.log(Math.max(...numbers));

/*function print(/*a, b, c, d, e* /) {
  //console.log(a, b, c, d, e);
  console.log(arguments);

  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}*/

function sum(...theNumbers) {
  let result = 0;
  theNumbers.forEach(n => result += n);
  return result;
}

console.log(sum(...numbers));
console.log(sum(5,3,1));

const [,g,...theRestOfTheThings] = numbers;
console.log(g, theRestOfTheThings);

const {first: theFirst, ...theRest} = vpotus;
console.log(theFirst, theRest);

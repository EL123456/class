//(function () {
'use strict';

const potus = {
  first: 'Joe',
  last: 'Biden',
  print: function () {
    console.log(`I am ${this.first} ${this.last}`);
  }
};

console.log(potus.first, potus.last);
potus.print();

/*function printPerson() {
  console.log(`I am ${this.first} ${this.last}`);
}
//printPerson();

function personTalk() {
  console.log(`${this.first} ${this.last} says hi!`);
}*/

const personFunctions = {
  print: function () {
    console.log(`I am ${this.first} ${this.last}`);
  },
  talk: function () {
    console.log(`${this.first} ${this.last} says hi!`);
  }
};

/*function personFactory(first, last) {
  return {
    first: first,
    last: last,
    /*print: function () {
      console.log(`I am ${this.first} ${this.last}`);
    }* /
    //print: printPerson,
    //talk: personTalk
    print: personFunctions.print,
    talk: personFunctions.talk
  };
}*/


function personFactory(first, last) {
  const person = {
    first: first,
    last: last
  };
  Object.assign(person, personFunctions);
  return person;
}

const kamala = personFactory('Kamala', 'Harris');
const myorkis = personFactory('A', 'Myorkis');

kamala.print();
myorkis.print();
myorkis.talk();

/////////////////
const p = {
  first: 'Jill',
  last: 'Biden',
  toString: function () {
    console.log('our own toString called');
  }
};

console.log(p.toString());

// old syntax, dont use - better syntax now available will see later
// p.__proto__ = personFunctions;
// better Object.create (see below)

p.talk();

function personFactory2(first, last) {
  const person = Object.create(personFunctions);
  person.first = first;
  person.last = last;
  return person;
}

const donald = personFactory2('Donald', 'Trump');
donald.print();
donald.talk();

personFunctions.sleep = function () {
  console.log(`${this.first} ${this.last} is sleeping. ZZzzz`);
};

donald.sleep();

////////////////////

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.print = function () {
  console.log(`I am ${this.first} ${this.last}`);
};

Person.prototype.talk = function () {
  console.log(`${this.first} ${this.last} says hi!`);
};
//Person.prototype = personFunctions;

const p2 = new Person('Bill', 'Clinton');
const p3 = new Person('Hillary', 'Clinton');

//const p2 = {};
//Person.call(p2, 'Bill', 'Clinton');
//p2.__proto__ = Person.prototype
//console.log(p2);

p2.print();

//Person('Ronald', 'Reagan');

function sleep() {
  console.log(`${this.first} ${this.last} is sleeping. ZZzzz`);
}

// p2.sleep();

//p2.sleep = sleep;
//p3.sleep = sleep;
Person.prototype.sleep = function () {
  console.log(`${this.first} ${this.last} is sleeping. ZZzzz`);
};

p2.sleep();
p3.sleep();

////////////////////

function Employee(first, last, department) {
  //this.first = first;
  //this.last = last;
  Person.call(this, first, last);
  this.department = department;
}
// Employee.prototype = Person.prototype;
//Employee.prototype = new Person();
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.print = function () {
  console.log(`I am ${this.first} ${this.last} and I work in ${this.department}`);
};

const employee = new Employee('Elon', 'Musk', 'Managment');
console.log(employee);

employee.talk();
employee.print();

p2.print();

///////////////

class PersonC {
  age = 0;
  #weight = 180;

  constructor(first, last) {
    this.first = first;
    this.last = last;

    //this.age = 0;
  }

  print() {
    console.log(`I am ${this.first} ${this.last} I am ${this.age} I weigh ${this.#weight}`);
  }

  talk() {
    console.log(`${this.first} ${this.last} says hi!`);
  }

  sleep() {
    console.log(`${this.first} ${this.last} is sleeping. ZZzzz`);
  }
}

const cp1 = new PersonC('Chaim', 'Peppard');
console.log(cp1);
//cp1.age = 25;
cp1.print();
cp1.talk();
cp1.sleep();
  //console.log(cp1.#weight);

//}());


//(function () {
  'use strict';

  function PersonC(first, last) {
    this.first = first;
    this.last = last;
  }
  PersonC.prototype.talk = function () {
    console.log(`${this.first} ${this.last} is talking`);
  };
  PersonC.prototype.print = function () {
    console.log(`${this.first} ${this.last}`);
  };

  const pc = new PersonC('Kamala', 'Harris');
  pc.talk();
  pc.print();

  class Person {
    static numberOfPersons = 0;

    static printNumberOfPeople() {
      console.log(`There are ${Person.numberOfPersons} people`);
    }

    constructor(first, last) {
      this.first = first;
      this.last = last;

      Person.numberOfPersons++;
    }

    talk() {
      console.log(`${this.first} ${this.last} is talking`);
    }

    print() {
      console.log(`${this.first} ${this.last}`);
    }
  }

  const p = new Person('Joe', 'Biden');
  p.talk();
  p.print();


  class Employee extends Person {
    constructor(first, last, department) {
      super(first, last);
      this.department = department;
    }

    print() {
      super.print();
      console.log(`${this.department}`);
    }
  }

  const employee = new Employee('Elon', 'Musk', 'Techno King');
  employee.talk();
  employee.print();

  Person.printNumberOfPeople();

//}());


'use strict';

/*function printPerson(person) {
  console.log(person.name, person.email);
}*/

function printPerson(datePrinted, timePrinted) {
  console.log(this);
  console.log(datePrinted, timePrinted, this.name, this.email);
}


const potus = {
  name: 'Joe Biden',
  email: 'jbiden@whitehouse.gov',

  print: function () {
    console.log(this.name, this.email);
  } /*printPerson*/
};

//printPerson(/*potus*/);
//potus.print();

const vpotus = {
  name: 'Kamala Harris',
  email: 'kharris@whitehouse.gov',

  print: /*function () {
    console.log(this.name, this.email);
  }*/ printPerson
};

//vpotus.print();

printPerson.call(vpotus);
printPerson.apply(vpotus);

potus.print();
const joesPrint = potus.print;
//joesPrint();
joesPrint.call(vpotus);

printPerson.call(potus, '8/3/22', '9:38PM');
printPerson.apply(vpotus, ['8/3/22', '9:38PM']);

function foo(a, b, c) {
  console.log(a,b,c,arguments);
}

foo(1,2,3,4,5,6,7);

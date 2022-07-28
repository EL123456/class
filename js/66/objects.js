'use strict';

function printPerson(p) {
  console.log(`Name: ${p.name} Age: ${p.age}`);
}

const potus = {
  name: 'Joe Biden',
  age: 87,
  print: function () {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
};

console.log(potus);
console.log(potus.name, potus.age);

printPerson(potus);
potus.print();


function personCreator(name , age) {
  /*function print() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }*/

  return {
    name: name,
    age: age,
    print: function () {
      console.log(`Name: ${this.name} Age: ${this.age}`);
    }
    //print: print
  };
}

const jill = personCreator('Jill', 82);
const myorkis = personCreator('myorkis', 82);
jill.print();
myorkis.print();

jill.age++;

jill.print();

jill.spouse = 'joe';
console.log(jill);

jill.title = ['Dr', 'Mrs'];
const jillJson = JSON.stringify(jill);
console.log(jillJson, typeof(jillJson));

const reconstitutedJill = JSON.parse(jillJson);
console.log(reconstitutedJill, typeof(reconstitutedJill));
//reconstitutedJill.print();

const newJill = personCreator(reconstitutedJill.name, reconstitutedJill.age);
newJill.print();

///// xml
/*<Person>
  <name>Jill</name>
  <age>82</age>
</Person>

<Person name="Jill" age="82"/>*/


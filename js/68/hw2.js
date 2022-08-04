window.calculator = (function () {
  'use strict';

  let rate;
  let years;

  /*function setRate(r) {
    rate = r;
  }

  function setYears(y) {
    years = y;
  }*/

  function calculateInterest(principle) {
    let p = principle;
    for(let i = 0; i < years; i++) {
      p += p * rate;
    }
    return p - principle;
  }

  /*return {
    setRate: setRate,
    setYears: setYears,
    calculateInterest: calculateInterest
  };*/

  return {
    setRate: function(r) {
      rate = r;
      return this;
    },
    setYears: function(y) {
       years = y;
       return this;
    },
    calculateInterest: calculateInterest
  };
})();

//window.calculator.setRate(0.1);
//window.calculator.setYears(2);
//console.log(window.calculator.calculateInterest(100));

/* global calculator */
console.log(calculator.setRate(0.1).setYears(2).calculateInterest(100));

function personCreator(n, a) {
  let name = n;
  let age = a;

  return {
    setName: function (n) {
       name = n;
       return this;
    },
    getName: () => name,
    setAge: function(a) {
      age = a;
      return this;
    },
    getAge: () => age,
    print: function() {
      console.log(`Name: ${name} Age: ${age}`);
      return this;
    }
  };
}

const potus = personCreator('Joe Biden', 135);
potus.print();

potus.setName('Kamala Harris');
potus.setAge(50);
potus.print();

potus.setName('Donald Trump').print().setAge(85).print();





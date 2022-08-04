(function () {
  //'use strict';

  const greeter1 = {
    greeting: 'Hello'
  };

  const greeter2 = {
    greeting: 'Shalom'
  };

  function greet(name, currentDate) {
    console.log(`${this.greeting} ${name} a fine ${currentDate} to you`);
  }

  //greet('Joe');
  greet.call(greeter1, 'Joe', '8/3/22');
  greet.apply(greeter2, ['Joe', '8/3/22']);

  const sayShalom = greet.bind(greeter2);
  sayShalom('Joe', '8/3/22');

  const sayHelloToKamalaOn8_3_22 = greet.bind(greeter1, 'Kamala', '8/3/22');
  sayHelloToKamalaOn8_3_22();

  ///////////////

  console.log(this);
  const potus = {
    name: 'Joe Biden',
    /*print: /*function() {
      console.log(this.name);
    }* / //() => console.log(this.name)
    function () {
      console.log(this);
      const printArrow = () => console.log(this.name);
      printArrow();
    },*/
    addPrintMethod: function () {
      console.log(this);
      this.print = () => console.log(this.name);
    }
  };

  potus.addPrintMethod();
  potus.print();
}());
(function () {
  'use strict';

  console.log(this);

  const potus = {
    name: 'Joe Biden',
    age: 103,
    print1: function () {
      console.log(`name: ${this.name} age: ${this.age}`);
    },

    /*print1: () => {
      console.log(`name: ${this.name} age: ${this.age}`);
    }*/

    live: function () {
      console.log('when live called', this);

      const theCallback = function () {
        this.age++;
        this.print1();
      };
      const theBoundCallback = theCallback.bind(this);

      setInterval(theBoundCallback, 1000);

      /*const that = this;
      setInterval(function () {
        //this.age++;
        //this.print1();
        that.age++;
        that.print1();
        console.log('interval happened');
      }, 1000);*/
      /*() => {
          this.age++;
          this.print1();
          console.log('interval happened');
      }, 1000);*/
    }
  };

  potus.print1();
  potus.print1();
  potus.print1();
  potus.live();

  //const potusesPrint = potus.print1;
  //console.log(potusesPrint());
}());
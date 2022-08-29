(function () {
  'use strict';

  const functions = [];

  for (/*let*/var i = 0; i < 5; i++) {
    /*functions[i] = function () {
      console.log(i);
    };*/
    console.log(`creating func ${i}`);
    //functions[i] = () => console.log(i);

    //functions[i] = createFunction(i);
    /*functions[i] = (function(x) {
      return () => console.log(x);
    }(i));*/
    functions[i] = (x => () => console.log(x))(i);

    console.log(`invoking ${i}`);
    functions[i]();
  }

  /*function createFunction(x) {
    return () => console.log(x);
  }*/

  functions.forEach(f => f());
}());
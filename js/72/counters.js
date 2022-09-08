(function () {
  'use strict';

  const counterA = window.app.createCounter();
  const counterB = window.app.createCounter();

  for (let i = 0; i < 5; i++) {
    window.app.counter1.increment();
  }

  for(let i = 0; i < 10; i++) {
    counterA.increment();
  }

  for (let i = 0; i < 15; i++) {
    counterB.increment();
  }

  console.log(window.app.counter1.getCount(), counterA.getCount(), counterB.getCount());
})();
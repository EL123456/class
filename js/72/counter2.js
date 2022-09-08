window.app = window.app || {};

window.app.createCounter = (function () {
  'use strict';

  let numberOfCounters = 0;

  return function () {
    numberOfCounters++;

    let i = 0;

    return {
      increment: () => ++i,
      getCount: () => i,
      getNumberOfCounters: () => numberOfCounters
    };
  };
  /*return {
    createCounter: function () {
      numberOfCounters++;

      let i = 0;

      return {
        increment: () => ++i,
        getCount: () => i
      };
    },
    getNumberOfCounters: () => numberOfCounters
  }*/
}());
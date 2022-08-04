/* globals calculator */
(function () {
  'use strict';

  window.calculator.setRate(0.1);
  calculator.setYears(2);
  console.log(calculator.calculateInterest(100));

}());
(function () {
  'use strict';

  /*const account1 = {
    balance: 1000
  };

  const account2 = {
    balance: 2000
  }*/

  function createAccount(openingBalance) {
    console.log(this);
    return {
      balance: openingBalance,
      performTransaction: function (amount) {
        this.balance += amount;
      }
      /*performTransaction (amount) {
        this.balance += amount;
      }*/
      // performTransaction: amount => this.balance += amount
    };
  }

  /*function performTransaction(amount, memo) {
    this.balance += amount;
    console.log(memo);
  }*/

  const account1 = createAccount(1000);
  const account2 = createAccount(2000);

  account1.performTransaction(100);
  account1.performTransaction(-10);

  // performTransaction(100);

  /*performTransaction.call(account1, 100, 'birthday present');
  performTransaction.call(account1, -10, 'cell phone bill');

  performTransaction.apply(account2, [200, 'bonus']);
  performTransaction.apply(account2, [-20, 'dinner']);

  const depositIntoAccount1 = performTransaction.bind(account1);
  depositIntoAccount1(10);

  const deposit50IntoAccount1 = performTransaction.bind(account1, 50);
  deposit50IntoAccount1();*/

  console.log(account1, account2);
}());
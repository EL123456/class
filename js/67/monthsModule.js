//'use strict';

/*const months = ['January', 'February', 'March', 'April'];

function getMonth(index) {
  return months[index - 1];
}

function getIndex(month) {
  const m = month.toLowerCase();
  for (let i = 0; i < months.length; i++) {
    if (months[i].toLowerCase() === m) {
      return i + 1;
    }
  }
}

console.log('getMonth(2)', getMonth(2));
console.log("getIndex('february')", getIndex('february'));*/

/*
const monthUtils = {
  months: ['January', 'February', 'March', 'April'],
  getMonth: function (index) {
    return this.months[index - 1]
  },
  getIndex: function (month) {
    const m = month.toLowerCase();
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].toLowerCase() === m) {
        return i + 1;
      }
    }
  }
};

console.log('monthUtils.getMonth(2)', monthUtils.getMonth(2));
console.log("monthUtils.getIndex('february')", monthUtils.getIndex('february'));*/

/*
function monthUtils() {
  const months = ['January', 'February', 'March', 'April'];

  function foo() {
    console.log('foo was called');
  }

  function getMonth(index) {
    foo();
    return months[index - 1];
  }

  function getIndex(month) {
    const m = month.toLowerCase();
    for (let i = 0; i < months.length; i++) {
      if (months[i].toLowerCase() === m) {
        return i + 1;
      }
    }
  }

  // console.log('getMonth(2)', getMonth(2));
  // console.log("getIndex('february')", getIndex('february'));

  return {
    getMonth: /*getMonth,* / index => months[index - 1],
    getIndex: /*getIndex* / month => {
      const m = month.toLowerCase();
      for (let i = 0; i < months.length; i++) {
        if (months[i].toLowerCase() === m) {
          return i + 1;
        }
      }
    }
  };
}

const mu = monthUtils();

console.log('mu.getMonth(2)', mu.getMonth(2));
console.log("mu.getIndex('february')", mu.getIndex('february'));*/

const mu = (function () {
  'use strict';

  const months = ['January', 'February', 'March', 'April'];

  /*function foo() {
    console.log('foo was called');
  }

  function getMonth(index) {
    foo();
    return months[index - 1];
  }

  function getIndex(month) {
    const m = month.toLowerCase();
    for (let i = 0; i < months.length; i++) {
      if (months[i].toLowerCase() === m) {
        return i + 1;
      }
    }
  }*/

  // console.log('getMonth(2)', getMonth(2));
  // console.log("getIndex('february')", getIndex('february'));

  return {
    getMonth: /*getMonth,*/ index => months[index - 1],
    getIndex: /*getIndex*/ month => {
      const m = month.toLowerCase();
      for (let i = 0; i < months.length; i++) {
        if (months[i].toLowerCase() === m) {
          return i + 1;
        }
      }
    }
  };
})();


// x = 5;

console.log('mu.getMonth(2)', mu.getMonth(2));
console.log("mu.getIndex('february')", mu.getIndex('february'));
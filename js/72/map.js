(function () {
  'use strict';

  const someNumbers = [2, 4, 6];

  function ourMap(theArray, callback) {
    const results = [];

    theArray.forEach(x => {
      results.push(callback(x));
    });

    return results;
  }


  //const doubled = someNumbers.map(n => n * 2);
  //const tripled = someNumbers.map(n => n * 3);
  //const food = someNumbers.map(n => n + 'foo');
  const doubled = ourMap(someNumbers, function (n) { return n * 2; });
  function triple(n) { return n * 3; }
  const tripled = ourMap(someNumbers, triple);
  const fooify = n => n + 'foo';
  const food = ourMap(someNumbers, fooify);

  console.log(someNumbers, doubled, tripled, food);


  const people = [{first: 'Joe', last: 'Biden'}, {first: 'Kamala', last: 'Harris'}];
  const names = ourMap(people, p => `${p.first} ${p.last}`);
  console.log(names);
}());
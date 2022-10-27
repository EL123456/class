(function () {
  'use strict';

  /*fetch('people.json')
    .then(response => response.text())
    .then(data => {
      console.log(data, typeof data);
      const people = JSON.parse(data);
      console.log(people, typeof people);
      people.forEach(person => {
        console.log(person);
      });
    });*/

  fetch('xpeople.json')
    .then(response => {
      console.log('response', response);
      if (response.status >= 400) {
        throw new Error(`oops ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data, typeof data);
      data.forEach(person => {
        console.log(person);
      });
    })
    .catch(e => console.error('oops', e));

  console.log('end of file');
}());
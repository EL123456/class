
console.log('start of file');

(function () {
  'use strict';

  /*let theResponse;
  fetch('hw.js')
    .then(response => {
      theResponse = response;
      if (response.status >= 400) {
        throw new Error(`${response.status} ${response.statusText}`);
        // console.error('oops1', `${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(text => console.log(theResponse.status, text))
    .catch(e => console.error('oops2', e));*/

  console.log('before fetch1');

  fetch('xpeople.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      response.text();
    })
    .then(text => console.log('fetch1', text))
    .catch(e => console.error('oops2', e));

  console.log('after fetch1');


  console.log('before fetch2');

  async function getTheData() {
    try {
      const response = await fetch('xpeople.json');
      if (! response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const text = await response.text();
      console.log('fetch2', response.status, text);
    } catch (e) {
      console.error('oops2', e);
    }
  }
  getTheData();

  console.log('after fetch2');


}());

console.log('end of file');
(async function () {
  'use strict';

  /*
  function doSomethingOne(n, callback, failureCallback) {
    callback(n + 1);
  }

  function doSomethingTwo(n, callback, failureCallback) {
    callback(n + 2);
  }

  function doSomethingThree(n, callback, failureCallback) {
    //callback(n + 3);
    failureCallback(n + 3);
  }

  doSomethingOne(2, r => {
    doSomethingTwo(r, r2 => {
      doSomethingThree(r2, r3 => {
        console.log(r3);
      }, e => console.error('3', e));
    }, e => console.error('2', e));
  }, e => console.error('1', e));

  /*
  doSomethingOne(2)
    .then(r => doSomethingTwo(r))
    .then(r => doSomethingThree(r))
    .then(r => console.log(r))
    .catch(e => console.error(e));

  try {
    let r = await doSomethingOne(2);
    r = await doSomethingTwo(r);
    r = await doSomethingThree(r);
    console.log(r);
  }
  catch(e) {
    console.error(e)
  }* /

  const myPromise = new Promise((resolve, reject) => {
    //setTimeout(() => {
      // do some work
      let fetchedText = 'pretend we fetched this';

      if (fetchedText) {
        resolve(fetchedText);
      } else {
        reject('failed to fetch text');
      }
    //}, 1000);
  });

  console.log('before calling promise');
  myPromise
    .then(t => console.log('success got', t))
    .catch(e => console.error(e));
  console.log('after calling promise');

  function thirdPartyFunction(callback) {
    setTimeout(() => {
      callback('result from 3rd party');
    }, 1000);
  }

  console.log('before calling third party function');
  thirdPartyFunction(r => console.log(r));
  console.log('after calling third party function');
  */

  function doSomethingOne(n) {
    return new Promise((resolve, reject) => {
      resolve(n + 1);
    });
  }

  function doSomethingTwo(n) {
    return new Promise((resolve, reject) => {
      resolve(n + 2);
    });
  }

  function doSomethingThree(n) {
    return new Promise((resolve, reject) => {
      resolve(n + 3);
      //reject(n + 3);
    });
  }

  /*doSomethingOne(2)
    .then(r => doSomethingTwo(r))
    .then(r => doSomethingThree(r))
    .then(r => console.log('then', r))
    .catch(e => console.error('.then', e));

  try {
    let r = await doSomethingOne(2);
    r = await doSomethingTwo(r);
    r = await doSomethingThree(r);
    console.log('await', r);
  }
  catch (e) {
    console.error('await', e);
  }*/

  const p1 = doSomethingOne(2);
  const p2 = doSomethingTwo(2);
  const p3 = doSomethingThree(2);

  /*Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(e => console.error(e));*/

    try {
      const results = await Promise.all([p1, p2, p3]);
      console.log(results);
    } catch(e) {
      console.error(e);
    }
}());
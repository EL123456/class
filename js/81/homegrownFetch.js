(async function () {
  'use strict';

  function homegrownFetch(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.onload = e => {
        if (request.status < 400) {
          resolve(request.responseText);
        } else {
          reject(new Error(`${request.status} ${request.statusText}`));
        }
      };

      request.onerror = e => {
        reject(new Error(`${request.status} ${request.statusText}`));
      };

      request.open('GET', url);
      request.send();
    });
  }

  homegrownFetch('videos.json')
    .then(r => console.log('success', r))
    .catch(e => console.error(e));

  try {
    const result = await homegrownFetch('jsonp.js');
    console.log('success', result);
  } catch(e) {
    console.error(e);
  }
}());
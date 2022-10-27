(function () {
  'use strict';

  const request = new XMLHttpRequest();
  console.log('after create', request.readyState);

  /*request.onreadystatechange = e => {
    console.log('in onreadystatechange', request.readyState);

    if (request.readyState === 4) {
      if (request.status < 400) {
        console.log('in onreadystatechange', request.responseText);
      } else {
        console.error('failed', request.status, request.statusText);
      }
    }
  };*/

  request.onload = e => {
    console.log('in onload', request.readyState);

    if (request.status < 400) {
      console.log('in onreadystatechange', request.responseText);
    } else {
      console.error('failed', request.status, request.statusText);
    }
  };

  request.onerror = e => {
    console.error('oops', e);
  }

  request.open('GET', 'file://c:\\contacts.html');
  console.log('after open', request.readyState);

  request.send();
  console.log('after send', request.readyState);

  console.log('before timeout', request.responseText);

  /*setTimeout(() => {
    console.log('in timeout', request.readyState);
    console.log('in timeout', request.responseText);
  }, 2000);*/

  console.log('end of file');
}());
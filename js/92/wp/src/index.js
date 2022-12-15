//(function () {
  //'use strict';

  // we will make this work next class
  //import './css/index.css';

  import * as moment from 'moment';

  let numDatesPicked = 0;
  const resultsElem = document.querySelector('#result');
  const datePicker = document.querySelector('#date');
  datePicker.addEventListener('change', () => {
    resultsElem.innerHTML = `${moment(datePicker.value).fromNow()}
    you have picked ${++numDatesPicked} so far`;
  });
//}());
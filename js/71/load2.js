/*const oldOnload2 = onload;

onload = function () {
  'use strict';

  if (oldOnload2) {
    oldOnload2();
  }

  document.getElementById('theButton').addEventListener('click', () => {
    console.log('load 2 - the button was clicked');
  });
};*/


document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  document.getElementById('theButton').addEventListener('click', () => {
    console.log('load 2 - the button was clicked');
  });
});
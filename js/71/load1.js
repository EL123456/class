
/*const oldOnload = onload;

onload = function () {
  'use strict';

  if (oldOnload) {
    oldOnload();
  }

  document.getElementById('theButton').addEventListener('click', () => {
    console.log('load 1 - the button was clicked');
  });
};*/

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  document.getElementById('theButton').addEventListener('click', () => {
    console.log('load 1 - the button was clicked');
  });
});
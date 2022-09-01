(function () {
  'use strict';

  let licenseAccepted = false;

  /*const licenseButton = document.getElementById('licenseButton');

  licenseButton.addEventListener('click', () => {
    licenseAccepted = true;
    licenseButton.disabled = true;
  });*/

  document.getElementById('licenseButton') .addEventListener('click', function(event) {
    licenseAccepted = true;
    //event.target.disabled = true;
    this.disabled = true;
  });

  document.getElementById('theAnchor').addEventListener('click', event => {
    console.log('anchor was clicked');

    if (!licenseAccepted) {
      event.preventDefault();
    }
  });
}());
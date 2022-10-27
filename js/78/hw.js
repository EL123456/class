(function () {
  'use strict';

  const nameInput = $('#name');
  const addressInput = $('#address');

  const nameResult = $('#nameResult');
  const addressResult = $('#addressResult');

  $('#theForm').submit(e => {
    e.preventDefault();

    console.log(`${nameInput.val()} ${addressInput.val()}`);
    nameResult.text(nameInput.val());
    addressResult.text(addressInput.val());
  });

  const theButton = $('#theForm button');
  /*const theCheckbox = $('#terms');
  theCheckbox.change(e => {
    //console.log(theCheckbox.is(':checked'));
    theButton.prop('disabled', !theCheckbox.prop('checked'));
  });*/

  /*$(document.body)
    .prepend('<input id="terms" type="checkbox">I have read the license and agree to the terms and conditions')
    .click(() => {
      console.log('input was clicked');
    });*/

  $('<div><input id="terms" type="checkbox">I have read the license and agree to the terms and conditions</div>')
    .prependTo(document.body)
    .find('#terms')
    .click(() => {
      console.log('input was clicked');
    });
}());


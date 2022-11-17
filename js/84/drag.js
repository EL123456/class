/* global $ */
(function () {
  'use strict';

  let dragging = false;
  let offset;
  /*const theBox = $('.box')
    .mousedown(e => {
      console.log('mouse down', e);
      dragging = true;
      offset = { y: e.offsetY, x: e.offsetX, };
    });*/

  $(document).on('mousedown', '.box', e => {
    console.log('mouse down', e);
    dragging = $(e.target);
    offset = { y: e.offsetY, x: e.offsetX, };
  }).mousemove(e => {
    if (dragging) {
      console.log('mouse move', e);
      dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
    }
  }).mouseup(e => {
    console.log('mouse up', e);
    dragging = false;
  });

  let colorPicker = $('#color');
  let body = $('body');
  $('#add').click(() => {
    $('<div class="box"></div>')
      .appendTo(body)
      .css('background-color', colorPicker.val());
  });
}());
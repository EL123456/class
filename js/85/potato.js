/* global $*/
(function () {
  'use strict';

  const NUM_PARTS = 23;
  const PART_SPACING = 116;
  const partsContainer = $("#parts");
  let x = 20;
  let y = 20;
  let parts = [];
  let potato;

  function placeParts() {
    for (let i = 1; i < NUM_PARTS; i++) {
      parts.push($(`<img class="part" src="images/${i}.png">`)
        .appendTo(partsContainer)
        .css({
          left: `${x}px`,
          top: `${y}px`
        }));

      x += PART_SPACING;

      if (x > (window.innerWidth / 4) - PART_SPACING) {
        x = 20;
        y += PART_SPACING;
      }
    }

    // place potato
    parts.push(
      potato = $('<img class="part potato" src="images/23.png">')
        .appendTo($('#main'))
        .css({
          left: (window.innerWidth / 2) + 100,
          top: '400px'
        }));
  }

  placeParts();

  /*let maxZindex = 1;
  let dragging;
  let offset;
  $(document).on('mousedown', '.part', e => {
    dragging = $(e.target);
    if (!dragging.is(potato)) {
      dragging.css('zIndex', maxZindex++);
    }
    offset = { y: e.offsetY, x: e.offsetX };
  }).mousemove(e => {
    if (dragging) {
      e.preventDefault();
      dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
    }
  }).mouseup(e => {
    if (dragging) {
      saveState();
      dragging = null;
    }
  });*/

  $('.part').draggable({
    stack: '.part',
    stop: saveState
  });

  function saveState() {
    let partData = [];

    parts.forEach(part => {
      partData.push({
        top: part.css('top'),
        left: part.css('left'),
        zIndex: part.css('z-index')
      });
    });

    localStorage.setItem('parts', JSON.stringify(partData));
  }

  function loadState() {
    const partData = JSON.parse(localStorage.getItem('parts'));
    if (partData) {
      partData.forEach((part, index) => {
        parts[index].css(part);
      });
    }
  }

  loadState();
}());
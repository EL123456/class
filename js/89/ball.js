(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
  context.fillStyle = 'red';

  let x = 50;
  let y = 50;
  let dx = 10;
  let dy = 10;
  function drawBall() {
    context.clearRect(0, 0, 1000, 500);
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    x += dx;
    y += dy;
    context.fill();

    if (x < 50 || x > 1000 - 50) {
      dx = -dx;
    }

    if (y < 50 || y > 500 - 50) {
      dy = -dy;
    }
  }
  setInterval(drawBall, 1);
}());
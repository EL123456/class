(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
  context.fillStyle = 'red';

  const RADIUS = 50;

  let maxX;
  let maxY;
  let minY = RADIUS;
  function resizeCanvas() {
    maxX = theCanvas.width = window.innerWidth;
    maxY = theCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let x = RADIUS;
  let y = RADIUS;
  let dx = .5;
  let dy = 1;

  let lastTimestamp = 0;
  function drawBall(timestamp) {
    //console.log(timestamp, performance.now());

    const timeDelta = timestamp - lastTimestamp;
    console.log(timeDelta);
    lastTimestamp = timestamp;

    context.clearRect(0, 0, maxX, maxY);
    context.beginPath();
    context.arc(x, y, RADIUS, 0, 2 * Math.PI);
    x += (dx * (timeDelta * 0.5));
    y += (dy * (timeDelta * 0.5));
    context.fill();

    if (x < RADIUS || x > maxX - RADIUS) {
      dx = -dx;
    }

    if (y < minY || y > maxY - RADIUS) {
      if (y > maxY - RADIUS) {
        minY += minY * 0.1;
        dx -= dx * 0.01;
        dy -= dy * 0.01;
      }
      dy = -dy;
    }

    requestAnimationFrame(drawBall);
  }

  //setInterval(drawBall, 16.66666);
  requestAnimationFrame(drawBall);
}());
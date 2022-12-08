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

  class Ball {
    constructor(radius = 50, color = '#000000') {
      this.radius = radius;
      this.color = color;
      this.x = radius;
      this.y = radius;
      this.dx = 5; //.5;
      this.dy = 10; //1;
    }

    //draw(timeDelta) {
    draw() {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.x += this.dx; //(this.dx * (timeDelta * 0.5));
      this.y += this.dy; //(this.dy * (timeDelta * 0.5));
      context.fill();

      if (this.x < this.radius || this.x > maxX - this.radius) {
        this.dx = -this.dx;
      }

      if (this.y < this.radius || this.y > maxY - this.radius) {
        this.dy = -this.dy;
      }
    }
  }

  const balls = [];//new Ball(40, 'red')];

  let lastTimestamp = 0;
  function drawBalls(/*timestamp*/) {
    /*const timeDelta = lastTimestamp ? timestamp - lastTimestamp : 0;
    console.log(timeDelta);
    lastTimestamp = timestamp;*/
    context.clearRect(0, 0, maxX, maxY);

    balls.forEach(ball => ball.draw()); //ball.draw(timeDelta));

    //requestAnimationFrame(drawBalls);
  }

  setInterval(drawBalls, 16.66666);
  //requestAnimationFrame(drawBalls);

  const radiusInput = document.querySelector('#radius');
  const colorInput = document.querySelector('#color');
  document.querySelector('#addBall').addEventListener('submit', e => {
    e.preventDefault();

    balls.push(new Ball(Number(radiusInput.value), colorInput.value));
  });
}());
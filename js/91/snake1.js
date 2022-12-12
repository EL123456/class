(function () {
  'use strict';

  const SNAKE_SIZE = 64;

  const canvas = document.querySelector('#theCanvas');
  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const context = canvas.getContext('2d');

  //const snakeHead = document.querySelector('image');
  const snakeHead = new Image();
  snakeHead.src = "images/snakehead.png";
  /*setTimeout(() => {
    context.drawImage(snakeHead, 200, 200);
  }, 1000);*/

  const crashSound = document.querySelector('#crash');

  let score = 52;
  let x = 0;
  let y = 0;
  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    let tempX = x;
    let tempY = y;
    switch (direction) {
      case 'ArrowUp':
        tempY -= SNAKE_SIZE;
        break;
      case 'ArrowRight':
        tempX += SNAKE_SIZE;
        break;
      case 'ArrowDown':
        tempY += SNAKE_SIZE;
        break;
      case 'ArrowLeft':
        tempX -= SNAKE_SIZE;
        break;
    }

    if (tempX < 0 || tempX > canvas.width - SNAKE_SIZE
      || tempY < 0 || tempY > canvas.height - SNAKE_SIZE) {
      gameOver = true;
    }

    if (! gameOver) {
      x = tempX;
      y = tempY;
      setTimeout(gameLoop, 100);
    } else {
      crashSound.currentTime = 0;
      crashSound.play();
      context.font = 'bold 32px Arial';
      context.fillStyle = '#000000';
      context.fillText(`GAME OVER!!!`, (canvas.width / 2) - 80, (canvas.height / 2) - 16);
    }

    context.drawImage(snakeHead, x, y);

    context.font = 'bold 32px Arial';
    context.fillStyle = '#ff0000';
    context.fillText(`Score ${score}`, canvas.width - 160, 40);
  }

  let gameOver = false;
  snakeHead.onload = () => {
    // context.drawImage(snakeHead, 0, 0);
    setTimeout(gameLoop, 100);
  };

  let direction = 'ArrowRight';
  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        direction = e.key;
        break;
    }
  });
}());
(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Ant {
    static ANT_SIZE = 4;

    constructor(color = '#000000') {
      this.x = window.innerWidth / 2;
      this.y = window.innerHeight / 2;
      this.color = color;
      this.brains = 0;
    }

    draw() {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, Ant.ANT_SIZE, Ant.ANT_SIZE * 2);
    }

    move() {
      if (--this.brains < 0) {
        this.brains = Ant.getRandomNumber(1, 50);
        this.moveX = Ant.getRandomNumber(-1, 1);
        this.moveY = Ant.getRandomNumber(-1, 1);
      }
      this.x += this.moveX;
      this.y += this.moveY;

      if (this.x < 0) {
        this.x = 0;
      }
      else if (this.x > theCanvas.width - Ant.ANT_SIZE) {
        this.x = theCanvas.width - Ant.ANT_SIZE;
      }

      if (this.y < 0) {
        this.y = 0;
      }
      else if (this.y > theCanvas.height - (Ant.ANT_SIZE * 2)) {
        this.y = theCanvas.height - (Ant.ANT_SIZE * 2);
      }

      this.draw();
    }

    static getRandomNumber(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    }
  }

  const ants = [];
  for(let i = 0; i < 1000; i++) {
    ants.push(new Ant());
  }
  setInterval(() => {
    context.clearRect(0,0, window.innerWidth, window.innerHeight);
    ants.forEach(ant => ant.move());
  }, 100);

  const antColorInput = document.querySelector('#antColor');
  const antCountInput = document.querySelector('#antCount');
  document.querySelector('#addAntsForm').addEventListener('submit', e => {
    e.preventDefault();
    for(let i = 0; i < antCountInput.value; i++) {
      ants.push(new Ant(antColorInput.value));
    }
  });

  /*const ant = new Ant();
  const moveTheAnt = ant.move.bind(ant);
  setInterval(moveTheAnt, 10);*/
}());
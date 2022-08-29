(function () {
  'use strict';

  const theButton = document.getElementById('theButton');

  /*theButton.style.color = 'white';
  theButton.style.backgroundColor = 'black';
  theButton.style.fontWeight = 'bold';
  theButton.style.padding = '1em';
  theButton.style.fontSize = '2em';
  theButton.style.position = 'absolute';
  theButton.style.top = '0';
  */

  theButton.className = 'theButton';
  theButton.style.top = '0';

  /*for(let i = 0; i < 250; i++) {
    theButton.style.top = `${i}px`;
    //theButton.style.top = `${parseInt(theButton.style.top) + 1}px`;
  }*/

  /*const moveIt = document.getElementById('moveIt');
  moveIt.addEventListener('click', () => theButton.style.top = `${parseInt(theButton.style.top) + 10}px`);*/

  function moveIt() {
    theButton.style.top = `${parseInt(theButton.style.top) + 10}px`;

    //setTimeout(moveIt, 1000);
  }

  //setTimeout(moveIt, 1000);
  //setInterval(moveIt, 1000);

  const startButton = document.getElementById('start');

  let theInterval;
  startButton.addEventListener('click', function () {
    console.log(theInterval);
    if (!theInterval) {
      theInterval = setInterval(moveIt, 100);
      startButton.innerText = 'stop';
    }
    else {
      clearInterval(theInterval);
      theInterval = null;
      startButton.innerText = 'start';
    }
  });

}());
(function () {
  'use strict';

  //const colors = ['red', 'white', 'blue'];
  //let index = 0;
  let interval;

  const theButton = document.getElementById('start');

  theButton.addEventListener('click', () => {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });

  /*function getRandomColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r},${g}, ${b})`;
  }*/

  let r = -1;
  let g = 0;
  let b = 0;
  const INCREMENT = 50;
  function startColors() {
    theButton.innerText = 'stop';
    interval = setInterval(() => {
      /*document.body.style.color = colors[index++];
      if (index === colors.length) {
        index = 0;
      }
      document.body.style.backgroundColor = colors[index];*/

      //document.body.style.color = getRandomColor();
      //document.body.style.backgroundColor = getRandomColor();

      /*for(let r = 0; r < 256; r++) {
        for(let g = 0; g < 256; g++) {
          for(let b = 0; b < 256; b ++) {
            document.body.style.color = `rgb(${r},${g},${b})`;
            document.body.style.backgroundColor = `rgb(${b},${g},${r})`;
          }
        }
      }*/

      //r++;
      r += INCREMENT;
      if (r >= 255) {
        r = 0;
        // g++;
        g += INCREMENT;
        if (g >= 255) {
          g = 0;
          //b++;
          b += INCREMENT;

          if (b >= 255) {
            b = 0;
          }
        }
      }

      console.log(`rgb(${r}, ${g}, ${b}`);
      document.body.style.color = `rgb(${r},${g},${b})`;
      document.body.style.backgroundColor = `rgb(${b},${g},${r})`;

    }, 1000);
  }

  function stopColors() {
    theButton.innerText = 'start';
    clearInterval(interval);
    interval = null;
  }
})();
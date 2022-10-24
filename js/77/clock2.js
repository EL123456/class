(function () {
  'use strict';

  const clockElem = document.createElement('div');
  document.body.appendChild(clockElem);

  /*clockElem.style.border = '1px solid blue';
  clockElem.style.display = 'inline-block';
  clockElem.style.padding = '1em';
  clockElem.style.fontSize = '2em';
  clockElem.style.color = 'red';
  clockElem.style.backgroundColor = 'black';
  clockElem.style.fontWeight = 'bold';*/

  clockElem.className = 'clock';

  /*let seconds = 0;
  let minutes = 0;
  let hours = 0;*/
  let ticks = 46790;

  function padLeft(v, length, padding) {
    // return v.toString().padStart(length, padding);
    let retVal = v.toString();
    while(retVal.length < length) {
      retVal = `${padding}${retVal}`;
    }
    return retVal;
  }

  function ensureTwoDigits(n) {
    // return n.toString().padStart(2, '0');
    // return n < 10 ? '0' + n : n;
    return padLeft(n, 2, '0');
  }

  function updateClock() {
    /*seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;

        if (hours === 24) {
          hours = 0;
        }
      }
    }*/

    ticks++;
    let seconds = ticks % 60;
    let minutes = Math.floor((ticks / 60)) % 60;
    let hours = Math.floor(((ticks / 60) / 60)) || 12;
    /*if (hours > 12) {
      hours -= 12;
    }*/


    //clockElem.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0') }`;
    clockElem.innerText = `${ensureTwoDigits(hours)}:${ensureTwoDigits(minutes)}:${ensureTwoDigits(seconds)}`;
  }

  setInterval(updateClock, 1000);
  updateClock();
}());
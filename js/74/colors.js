(function () {
  'use strict';

  let interval;

  const theButton = document.getElementById('start');
  const colorTable = document.querySelector('#colorTable');

  theButton.addEventListener('click', () => {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });

  function getRandomColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r},${g}, ${b})`;
  }

  function startColors() {
    theButton.innerText = 'stop';
    interval = setInterval(() => {
      const color = getRandomColor();
      const backgroundColor = getRandomColor();
      setColors(document.body, color, backgroundColor);

      addColorsToTable(color, backgroundColor);
    }, 1000);
  }

  function stopColors() {
    theButton.innerText = 'start';
    clearInterval(interval);
    interval = null;
  }

  function setColors(elem, color, backgroundColor) {
    elem.style.color = color;
    elem.style.backgroundColor = backgroundColor;
  }

  function addColorsToTable(color, backgroundColor) {
    const row = colorTable.insertRow();
    setColors(row, color, backgroundColor);

    row.insertCell().innerText = new Date().toLocaleTimeString();

    //const timeCell = row.insertCell();
    const colorCell = row.insertCell();
    const backgroundColorCell = row.insertCell();

    //timeCell.innerText = new Date().toLocaleTimeString();
    colorCell.innerText = color;
    backgroundColorCell.innerText = backgroundColor;

    //row.addEventListener('click', /*() => handleRowClick(color, backgroundColor)*/ handleRowClick);
  }

  colorTable.addEventListener('click', handleRowClick);
  function handleRowClick(event /*color, backgroundColor*/) {
    stopColors();
    //setColors(document.body, color, backgroundColor);
    setColors(document.body, event.target.parentNode.style.color, event.target.parentNode.style.backgroundColor);
    //const elementStyle = getComputedStyle(event.target);
    //setColors(document.body, elementStyle.color, elementStyle.backgroundColor);
  }
})();
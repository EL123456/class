(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(elem, property, val) {
    elem.style[property] = val;
  }

  const theColorInput = get('color');
  const theBgColorInput = get('bgcolor');

  get('apply').addEventListener('click', () => console.log('apply clicked'));
  
  get('theForm').addEventListener('submit', event => {
    event.preventDefault();
    setCss(document.body, 'color', theColorInput.value);
    setCss(document.body, 'backgroundColor', theBgColorInput.value);
  });
})();
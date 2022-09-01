(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(elem, property, val) {
    elem.style[property] = val;
  }

  /*document.getElementById('apply').addEventListener('click', () => {
    document.body.style.color = document.getElementById('color').value;
    document.body.style.backgroundColor = document.getElementById('bgcolor').value;
  });*/

  const theColorInput = get('color');
  const theBgColorInput = get('bgcolor');
  /*get('apply').addEventListener('click', () => {
    // document.body.style.color = get('color').value;
    // document.body.style.backgroundColor = get('bgcolor').value;

    //document.body.style.color = theColorInput.value;
    //document.body.style.backgroundColor = theBgColorInput.value;

    setCss(document.body, 'color', theColorInput.value);
    setCss(document.body, 'backgroundColor', theColorInput.value);
  });*/

  theColorInput.addEventListener('change', () => {
    setCss(document.body, 'color', theColorInput.value);
  });

  theBgColorInput.addEventListener('input', () => {
    setCss(document.body, 'backgroundColor', theBgColorInput.value);
  });

  const nameInput = get('name');
  nameInput.addEventListener('change', () => {
    console.log('change', nameInput.value);
  });
  nameInput.addEventListener('input', () => {
    console.log('input', nameInput.value);
  });
})();
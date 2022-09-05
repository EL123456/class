(function () {
  'use strict';

  let buttonCount = 1;
  const parent = document.querySelector('#parent');

  /*const clickHandler = /*event =>* /function (event) {
    //console.log(`${event.target.innerText} was clicked`);
    console.log(`${this.innerText} was clicked`);
    const newButton = document.createElement('button');
    newButton.innerText = `${++buttonCount}`;
    newButton.addEventListener('click', /*() => clickHandler(newButton)* /clickHandler);
    /*document.body* /parent.appendChild(newButton);
  };

  document.querySelector('#one').addEventListener('click', clickHandler);*/

  parent.addEventListener('click', event => {
    //if (event.target !== parent) {
    if (event.target.tagName === 'BUTTON') {
      const newButton = document.createElement('button');
      newButton.innerText = `${++buttonCount}`;
      parent.appendChild(newButton);
    }
  });
})();
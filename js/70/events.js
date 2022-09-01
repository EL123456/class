(function () {
  'use strict';

  const one = document.getElementById('one');
  one.style.color = 'red';

  one.addEventListener('click', event => {
    console.log('one was clicked', event);
    // event.stopPropagation();
  });

  const theDiv = document.getElementById('theDiv');
  theDiv.addEventListener('click', event => {
    console.log('div was clicked', event);

    /*if(event.target.innerText === '2') {
      console.log('two was clicked');
    } else if (event.target.innerText === '3') {
      console.log('three was clicked');
    } else if (event.target.innerText === '4') {
      console.log('four was clicked');
    }*/

    console.log(`fetch ajax for id ${event.target.id}`);
  });

}());
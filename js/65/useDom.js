"use strict";

// jshint -W079
var it = document.getElementById('it');
var clickCount = document.getElementById('clickCount');
var clicks = 0;

/*it.addEventListener('click', function () { clickCount.innerText = ++clicks;});*/

function handleClick(event) {
  console.log('clicked', event);
  clickCount.innerText = ++clicks;
}
/*function handleClick() {
  console.log('clicked');
  clickCount.innerText = ++clicks;
}*/

it.addEventListener('click', handleClick);

                    //function () { clickCount.innerText = ++clicks; }
//it.addEventListener('click', () => clickCount.innerText = ++clicks);


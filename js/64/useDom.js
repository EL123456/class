"use strict";

var it = document.getElementById('it');
var clickCount = document.getElementById('clickCount');
var clicks = 0;
it.addEventListener('click', function () {
  console.log('clicked');
  clickCount.innerText = ++clicks;
});

alert("Hello");
var age = prompt("How old are you?");
alert("You are " + age + " years old");
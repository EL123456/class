import './css/index.css';
import $ from 'jquery';

import snakeHead from '../images/snakehead.png';
import redapple from '../images/redapple.png';

/* global $ */
//(function ($) {
//  'use strict';

  let numClicks = 0;
  $('#theButton').click(() => {
    $('#results').text(`You have clicked ${++numClicks} times`);

    let img = new Image();
    //img.src = 'images/snakehead.png';
    img.src = snakeHead;
    document.body.append(img);

    img = new Image();
    img.src = redapple;
    document.body.append(img);
  });


  import joe from './potus.json';
  console.log(typeof joe, joe.first, joe.last, joe.address);

  import joey from './potus.json5';
  console.log(typeof joey, joey.first, joey.last, joey.address);

  //import { sayHello, sayGoodbye } from './sayHello';
  //sayHello('Joe');
  //sayGoodbye('Joe');

  import foo, { sayGoodbye as bar, score } from './sayHello';
  foo('Joe');
  bar('Joe');
  console.log(score);
//}($));
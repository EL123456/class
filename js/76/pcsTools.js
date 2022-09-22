window.pcs = window.pcs || {};
window.pcs = (function () {
  'use strict';

  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    //console.log('in set with', property, value);
    elem.style[property] = value;
  }

  function getCss(elem, property) {
    //console.log('in get with', property);
    //return elem.style[property];
    return getComputedStyle(elem, property);
  }

  function addEventListener(elem, type, callback) {
    elem.addEventListener(type, callback);
  }

  function getRandomColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r},${g}, ${b})`;
  }

  const speeds = {
    fast: 100,
    medium: 500,
    slow: 1000
  };

  function getSpeed(speed) {
    if (typeof (speed) === 'number') {
      return speed;
    }
    return speeds[speed] || speeds.medium;
  }

  return function (selector) {
    const elem = get(selector);

    return {
      /*setCss: (property, value) => setCss(elem, property, value),
      getCss: (property) => getCss(elem, property)*/
      css: function (property, value) {
        if (arguments.length === 2) {
          setCss(elem, property, value);
          return this;
        } else {
          return getCss(elem, property);
        }
      },
      click: function (callback) {
        addEventListener(elem, 'click', callback);
        return this;
      },
      hide: function () {
        setCss(elem, 'display', 'none');
        return this;
      },
      show: function (displayValue = 'block') {
        setCss(elem, 'display', displayValue);
        return this;
      },
      flash: function (duration, speed) {
        const originalColor = getCss(elem, 'color');
        const theInterval = setInterval(() => {
          setCss(elem, 'color', getRandomColor());
        }, speeds[speed]);

        setTimeout(() => {
          clearInterval(theInterval);
          setCss(elem, 'color', originalColor);
          // this.css('color', originalColor);
        }, duration);

        return this;
      }
    };
  };
}());
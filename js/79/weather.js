(function () {
  'use strict';

  const key = 'get your own key - but if you must you can use this'; //4d940566413cbb48ddbe156f2b502364';

  async function getWeather(zip) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial&lang=he`);
    const weatherData = await response.json();
    console.log(weatherData);
  }

  const zipInput = $('#zip');
  zipInput.change(() => {
    getWeather(zipInput.val());
  });
}());


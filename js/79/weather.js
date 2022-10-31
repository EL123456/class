/*77834973e8caa524a142bcea4a68e1b8

https://api.openweathermap.org/data/2.5/weather?zip=08701&appid=77834973e8caa524a142bcea4a68e1b8

https://api.openweathermap.org/data/2.5/weather?zip=08701&appid=77834973e8caa524a142bcea4a68e1b8&units=imperial&lang=he*/

(function () {
  'use strict';

  async function getWeather(zip) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=77834973e8caa524a142bcea4a68e1b8&units=imperial&lang=he`);
    const weatherData = await response.json();
    console.log(weatherData);
  }

  const zipInput = $('#zip');
  zipInput.change(() => {
    getWeather(zipInput.val());
  });
}());


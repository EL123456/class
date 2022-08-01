(function() {
  "use strict";

  const theButton = document.getElementById('it');
  const clickCount = document.getElementById('clickCount');
  let clicks = 0;

  theButton.addEventListener('click', function () { clickCount.innerText = ++clicks;});
})();




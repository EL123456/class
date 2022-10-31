/*global $, app*/
(function () {
  'use strict';

  const theNameInput = $('#name');
  const theResults = $('#results');
  const theHtmlResults = $('#htmlResults');
  const spinner = $('#spinner');

  /*$('#load').click(() => {
    theResults.text('');
    spinner.show();
    fetch(theNameInput.val())
      .then(response => {
        if (! response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => {
        //spinner.hide();
        theResults.text(text);
      })
      .catch(e => {
        //spinner.hide();
        app.messageBox.show(e.message);

        throw new Error('oops again');
      })
      .finally(() => spinner.hide());
  });*/

  $('#load').click(async () => {
    theResults.text('');
    spinner.show();
    try {
      const response = await fetch(theNameInput.val());
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const text = await response.text();
      theResults.text(text);
      theHtmlResults.html(text);
    } catch(e) {
      app.messageBox.show(e.message);
    } finally {
      spinner.hide();
    }
  });
}());
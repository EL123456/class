/* global $, app */
(function () {
  'use strict';

  let contacts = [];
  const contactsTable = $('#contactsTable tbody');
  const firstInput = $('#first');
  const lastInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');
  const addContactForm = $("#newContactForm");

  $('#add').click(() => {
    addContactForm.slideDown('slow');
  });

  function addContactToTable(newContact) {
    if (!contacts.length) {
      $(':first-child', contactsTable).remove();
    }

    contacts.push(newContact);

    const row = $(`
      <tr>
        <td>${newContact.first}</td>
        <td>${newContact.last}</td>
        <td>${newContact.email}</td>
        <td>${newContact.phone}</td>
        <td><button>delete</button></td>
      </tr>
    `).appendTo(contactsTable);

    row.find('button').click(() => {
      row.remove();
      contacts = contacts.filter(c => c !== newContact);

      if (!contacts.length) {
        contactsTable.append('<tr><td colspan="5">no contacts loaded</td></tr>');
      }
    });
  }

  addContactForm.submit(function (event) {
    event.preventDefault();

    const newContact = {
      first: firstInput.val(),
      last: lastInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    addContactToTable(newContact);

    resetAndHideForm();
  });

  $('#cancel').click(resetAndHideForm);

  function resetAndHideForm() {
    addContactForm.trigger('reset');

    addContactForm.slideUp('fast');
  }

  $('#load').click(async () => {
    try {
      const response = await fetch('people.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const people = await response.json();
      people.forEach(person => {
        addContactToTable(person);
      });
    } catch(e) {
      app.messageBox.show(`unable to load contacts - ${e.message}`);
    }
  });
})();
/* global $ */
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
    // addContactForm.css('display', 'inline-block');
    addContactForm.show();
  });

  addContactForm.submit(function (event) {
    event.preventDefault();

    if (!contacts.length) {
      $(':first-child', contactsTable).remove();
    }

    const newContact = {
      first: firstInput.val(),
      last: lastInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    contacts.push(newContact);

    // after class fix
    // wrong - using append row will be contacts table
    /*const row = contactsTable.append(`
      <tr>
        <td>${newContact.first}</td>
        <td>${newContact.last}</td>
        <td>${newContact.email}</td>
        <td>${newContact.phone}</td>
        <td><button>delete</button></td>
      </tr>
    `);*/

    // correct - using appendTo row will be added row
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
      // console.log('would delete contact here');
      row.remove();
      contacts = contacts.filter(c => c !== newContact);

      if (!contacts.length) {
        contactsTable.append('<tr><td colspan="5">no contacts loaded</td></tr>');
      }
    });

    resetAndHideForm();
  });

  $('#cancel').click(resetAndHideForm);

  function resetAndHideForm() {
    //addContactForm[0].reset();
    addContactForm.trigger('reset');

    //addContactForm.css('display', 'none');
    addContactForm.hide();
  }
})();
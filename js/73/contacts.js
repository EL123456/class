(function () {
  'use strict';

  // silly helpers to start to get used to jQuery style of doing things
  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function addEventListener(element, eventType, callback) {
    // browser sniffing
    /*if (navigator.userAgent.indexOf('internet explorer') > -1) {
      element.attachEvent(eventType, callback);
    } else {
      element.addEventListener(eventType, callback);
    }*/

    // feature detection
    if(element.addEventListener) {
      element.addEventListener(eventType, callback);
    } else if (element.attachEvent) {
      element.attach(event, callback);
    }
  }

  let contacts = [];
  const contactsTable = get('#contactsTable');
  const firstInput = get('#first');
  const lastInput = get('#last');
  const emailInput = get('#email');
  const phoneInput = get('#phone');
  const addContactForm = get("#newContactForm");

  addEventListener(get('#add'), 'click', () => {
    setCss(addContactForm, 'display', 'inline-block');
  });

  addEventListener(addContactForm, 'submit', /*event =>*/ function(event) {
    event.preventDefault();

    if (!contacts.length) {
      contactsTable.deleteRow(1);
    }

    const newContact = {
      first: firstInput.value,
      last: lastInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

    contacts.push(newContact);

    const row = contactsTable.insertRow();
    const firstCell = row.insertCell();
    const lastCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    const deleteCell = row.insertCell();

    firstCell.innerText = newContact.first;
    lastCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteCell.appendChild(deleteButton);

    addEventListener(deleteButton, 'click', () => {
      // console.log('would delete contact here');
      row.remove();
      contacts = contacts.filter(c => c !== newContact);

      if(!contacts.length) {
        const noContactsLoadedRow = contactsTable.insertRow();
        const cell = noContactsLoadedRow.insertCell();
        cell.innerText = 'no contacts loaded';
        cell.setAttribute('colspan', '5');
        //noContactsLoadedRow.innerHTML = '<td colspan="5">no contacts loaded</td>';
      }
    });

    resetAndHideForm();
  });

  addEventListener(get('#cancel'), 'click', () => {
    resetAndHideForm();
  });

  function resetAndHideForm() {
    addContactForm.reset();
    setCss(addContactForm, 'display', 'none');
  }
})();
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

  const contacts = [];
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
    //const row = document.createElement('tr');
    //contactsTable.appendChild(row);
    //contactsTable.innerHTML = '<tr><td>new row</td></tr>';

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

    firstCell.innerText = newContact.first;
    lastCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

     /*firstInput.value = '';
    lastInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';*/
    /*addContactForm*/this.reset();
    setCss(addContactForm, 'display', 'none');
  });
})();
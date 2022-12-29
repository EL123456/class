/* global DOMPurify*/
(async function () {
  'use strict';

  class Order {
    constructor(customer, address, items) {
      this.customer = customer;
      this.address = address;
      this.items = items;
    }

    /*constructor(props) {
      const { customer, address, items } = props;

      const theItems = items.map(item => new Item(item));

      this.customer = customer;
      this.address = address;
      this.items = theItems;
    }*/

    static fromJSON(props) {
      const { customer, address, items } = props;

      const theItems = items.map(item => Item.fromJSON(item));
      return new Order(customer, address, theItems);
      //return new this(customer, address, theItems);
    }

    get total() {
      /*let total = 0;
      this.items.forEach(item => total += item.quantity * item.price);
      return total;*/

      return this.items.reduce((a, c) => a + (c.price * c.quantity), 0);
    }

    toHtml() {
      let html = `
        <h2>order</h2>
        <p>${this.customer}</p>
        <p>${this.address}</p>
        <h3>items</h3>
        <ul>`;

      html += this.items.map(item => item.toHtml()).join('');

      html += `</ul>`;

      return html;
    }
  }

  class Item {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }

    /*constructor(props) {
      const { item, quantity, total } = props;

      this.name = item;
      this.quantity = quantity;
      this.price = total / quantity;
    }*/

    static fromJSON(props) {
      const { item, quantity, total } = props;
      return new Item(item, quantity, total / quantity);
    }

    toHtml() {
      return `<li>${this.name} ${this.quantity} @ ${this.price}</li>`;
    }
  }

  //const order = new Order('Joe Biden', '1600 Pennsylvania Ave', ['milk', 'danish', 'coffee']);
  //console.log(order);

  /*const order = new Order({
    customer: 'Joe Biden',
    address: '1600 Pennsylvania Ave',
    items: [{
      item: 'milk',
      quantity: 2,
      total: 3.98
    }]
  });
  console.log(order);*/

  //const item = new Item('milk', 2, 1.99);
  //console.log(item);

  //const response = await fetch('orders.json');
  //const orders = await response.json();
  //console.log(orders);

  /*const theOrders = [];
  orders.forEach(order => {
    const theItems = order.items.map(item => new Item(item.item, item.quantity, item.total / item.quantity));
    theOrders.push(new Order(order.customer, order.address, theItems));
  });*/




  /*const theOrders = orders.map(order => {
    const theItems = order.items.map(item => new Item(item.item, item.quantity, item.total / item.quantity));
    return new Order(order.customer, order.address, theItems);
  });*/
  //const theOrders = orders.map(order => new Order(order));

  //const theOrders = orders.map(order => Order.fromJSON(order));

  //console.log(theOrders);
  //console.log(theOrders[0].total);

  /*theOrders.forEach(order => {
    const orderElement = document.createElement('div');
    orderElement.innerHTML = order.toHtml() + '<hr>';
    document.body.append(orderElement);
  });*/

  //document.body.innerHTML = theOrders.map(order => order.toHtml()).join('<hr>');

  /*theOrders.forEach(order => displayOrder(order));
  function displayOrder(order) {
    let html = `
      <h2>order</h2>
      <p>${order.customer}</p>
      <p>${order.address}</p>
      <h3>items</h3>
      <ul>`;

    order.items.forEach(item => {
      html += `<li>${item.name} ${item.quantity} @ ${item.price}</li>`;
    });

    html += `</ul>
             <hr>`;

    const orderElement = document.createElement('div');
    orderElement.innerHTML = html;
    document.body.append(orderElement);
  }*/

  /*orders.forEach(order => {
    let html = `
      <h2>order</h2>
      <p>${order.customer}</p>
      <p>${order.address}</p>
      <h3>items</h3>
      <ul>`;

    order.items.forEach(item => {
      html += `<li>${item.item} ${item.quantity} @ ${item.total}</li>`;
    });

    html += `</ul>
             <hr>`;

    const orderElement = document.createElement('div');
    orderElement.innerHTML = html;
    document.body.append(orderElement);
  });*/

  async function loadJson() {
    try {
      const response = await fetch('orders.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return await response.json();
    }
    catch (e) {
      console.error('oops', e);
      //return [];
    }
  }

  const orderElem = document.querySelector('#order');
  async function loadOrder() {
    const orders = await loadJson();
    if (orders) {
      const theOrders = orders.map(order => Order.fromJSON(order));
      orderElem.innerHTML = DOMPurify.sanitize(theOrders.map(order => order.toHtml()).join('<hr>'));
    }
  }

  document.querySelector('#load').addEventListener('click', loadOrder);
}());

// very hard - 1
// hard - 5
// not easy / not hard - 8
// easy - 5
// very easy - 4
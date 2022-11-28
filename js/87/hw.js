//(function () {
  'use strict';

  const v = {
    color: 'green',
    speed: 0,
    go: function (speed) {
      this.speed = speed;
      console.log(`${this.color} now going ${this.speed}`);
    },
    print: function () {
      console.log(`${this.color} going ${this.speed}`);
    }
  };

  v.print();
  v.go(50);
  v.print();

  const vehicleFunctions = {
    go: function (speed) {
      this.speed = speed;
      console.log(`${this.color} now going ${this.speed}`);
    },
    print: function () {
      console.log(`${this.color} going ${this.speed}`);
    }
  };

  function createVehicle(color) {
    /*return {
      color: color,
      speed: 0,
      go: function (speed) {
        this.speed = speed;
        console.log(`${this.color} now going ${this.speed}`);
      },
      print: function () {
        console.log(`${this.color} going ${this.speed}`);
      }
    };*/

    const v = {
      color: color,
      speed: 0
    };

    Object.assign(v, vehicleFunctions);

    return v;
  }

  const v1 = createVehicle('red');
  const v2 = createVehicle('blue');
  v1.go(100);
  v2.go(65);
  v1.print();
  v2.print();

  const planeFunctions = {
    go: function (speed) {
      this.speed = speed;
      console.log(`${this.color} now flying ${this.speed}`);
    }
  };

  function createPlane(color) {
    const p = createVehicle(color);
    Object.assign(p, planeFunctions);
    return p;
  }

  const p = createPlane('white');
  p.go(500);
  p.print();

  /////////////////////////////////

  function createVehicle2(color) {
    /*const v = {
      color: color,
      speed: 0
    };

    //Object.assign(v, vehicleFunctions);
    v.__proto__ = vehicleFunctions;

    return v;*/

    const v = Object.create(vehicleFunctions);
    v.speed = 0;
    v.color = color;
    return v;
  }

  const v3 = createVehicle2('black');
  v3.go(60);
  v3.print();

  vehicleFunctions.stop = function () {
    this.speed = 0;
    console.log(`${this.color} has stopped`);
  };
  v3.stop();
  v3.print();

  const planeBase = Object.create(vehicleFunctions);
  console.log(planeBase);
  planeBase.go = function (speed) {
    this.speed = speed;
    console.log(`${this.color} now flying ${this.speed}`);
  };
  function createPlane2(color) {
    const p = Object.create(planeBase);
    p.speed = 0;
    p.color = color;

    /*p.go = function (speed) {
      this.speed = speed;
      console.log(`${this.color} now flying ${this.speed}`);
    };*/
    //Object.assign(p, planeFunctions);

    return p;
  }

  const p2 = createPlane2('red');
  p2.go(550);
  p2.print();

  /////////////////////////

  function Vehicle(color) {
    this.speed = 0;
    this.color = color;
    Vehicle.numberOfVehicles++;
  }
  Vehicle.numberOfVehicles = 0;
  Vehicle.printNumberOfVehicles = function () {
    console.log(`there are now ${Vehicle.numberOfVehicles} vehicles`);
  };
  Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`${this.color} now going ${this.speed}`);
  };
  Vehicle.prototype.print = function () {
    console.log(`${this.color} going ${this.speed}`);
  };

  const v4 = new Vehicle('brown');
  console.log(v4);
  v4.go(25);
  v4.print();

  function Plane(color) {
    // this.speed = 0;
    // this.color = color;
    Vehicle.call(this, color);
  }
  //Plane.prototype = /*Vehicle.prototype; new Vehicle();*/
  Plane.prototype = Object.create(Vehicle.prototype);
  Plane.prototype.constructor = Plane;
  Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`${this.color} now flying ${this.speed}`);
  };

  const p3 = new Plane('orange');
  p3.go(450);
  console.log('p3');
  p3.print();

  const p4 = new Plane('purple');
  p4.go(1000);

  console.log('p4');
  p4.print();

  console.log('p3');
  p3.print();

  Vehicle.prototype.clone = function () {
    const copy = new /*Vehicle*/this.constructor(this.color);
    copy.speed = this.speed;
    return copy;
  };

  const cv4 = v4.clone();
  cv4.print();
  cv4.go(10);

  const cp4 = p4.clone();
  cp4.print();
  cp4.go(1000);

  const anotherPlane = new Plane('light blue');
  Vehicle.printNumberOfVehicles();

//}());
//(function () {
//'use strict';

class Vehicle {
  speed = 0;

  static #numberOfVehicles = 0;
  static getNumberOfVehicles() {
    return Vehicle.#numberOfVehicles;
  }

  constructor(color) {
    this.color = color;

    Vehicle.#numberOfVehicles++;
  }

  print() {
    console.log(`${this.color} - ${this.speed}`);
  }

  go(speed) {
    this.speed = speed;
    console.log(`${this.color} vehicle is now going ${this.speed}`);
  }
}

const v = new Vehicle('green');
v.go(65);
v.print();

class Plane extends Vehicle {
  constructor(color) {
    super(color);
  }
  go(speed) {
    super.go(speed);
    console.log(`${this.color} plane is now flying ${this.speed}`);
  }
}

const p = new Plane('white');
p.go(500);
p.print();

console.log(Vehicle.getNumberOfVehicles());


function Vehicle2(color) {
  this.speed = 0;
  this.color = color;
}
Vehicle2.prototype.go = function (speed) {
  this.speed = speed;
  console.log(`${this.color} vehicle is now going ${this.speed}`);
};
Vehicle2.prototype.print = function () {
  console.log(`${this.color} - ${this.speed}`);
};

const v2 = new Vehicle2('green');
v2.go(65);
v2.print();

function Plane2(color) {
  Vehicle2.call(this, color);
}
Plane2.prototype = Object.create(Vehicle2.prototype);
Plane2.prototype.constructor = Plane2;
Plane2.prototype.go = function (speed) {
  this.speed = speed;
  console.log(`${this.color} plane is now flying ${this.speed}`);
};

const p2 = new Plane2('white');
p2.go(500);
p2.print();

const vehicleFunctions = {
  print() {
    console.log(`${this.color} - ${this.speed}`);
  },
  go(speed) {
    this.speed = speed;
    console.log(`${this.color} vehicle is now going ${this.speed}`);
  }
};

function createVehicle(color) {
  const v = Object.create(vehicleFunctions);
  v.speed = 0;
  v.color = color;
  return v;
}

const v3 = createVehicle('green');
v3.go(65);
v3.print();


const planeBase = Object.create(vehicleFunctions);
planeBase.go = function (speed) {
  this.speed = speed;
  console.log(`${this.color} now flying ${this.speed}`);
};
function createPlane(color) {
  const p = Object.create(planeBase);
  p.speed = 0;
  p.color = color;
  return p;
}

const p3 = createPlane('white');
p3.go(500);
p3.print();


/////////mixin
function Printable() {}
Printable.prototype.sendToPrinter = function () {
  console.log('Printable.sendToPrinter called');
};

function Drawable() {}
Drawable.prototype.draw = function () {
  console.log('Drawable.draw called');
};

function PrintableAndDrawable() {}
PrintableAndDrawable.prototype = Object.create(Printable.prototype);
//PrintableAndDrawable.prototype = Object.create(Drawable.prototype);
Object.assign(PrintableAndDrawable.prototype, Drawable.prototype);
Object.assign(PrintableAndDrawable.prototype, Vehicle2.prototype);

const pad = new PrintableAndDrawable();
pad.sendToPrinter();
pad.draw();
pad.go(500);

//}());
const organism = {};
const animal = Object.create(organism);
const mammal = Object.create(animal);
const dog = Object.create(mammal);

mammal.hasHair = true;
animal.hasHair = false;

dog.speak = function () {
  console.log('woof woof');
}

////////////////

const spot = Object.create(dog);
spot.name = 'spot';
spot.breed = 'chihuahua';
spot.color = 'white';
spot.weight = 10;
spot.owner = {
  first: 'Joe',
  last: 'Biden'
};

const rover = Object.create(spot);
rover.name = 'rover';
rover.breed = 'doberman';
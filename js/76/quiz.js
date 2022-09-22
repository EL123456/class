(function () {
  'use strict';

  const boyNames = ['Joe', 'Donald', 'Barack', 'George W', 'Bill', 'George H'];
  const girlNames = ['Jill', 'Melania', 'Michelle', 'Laura', 'Hillary'];
  const lastNames = ['Biden', 'Trump', 'Obama', 'Bush', 'Clinton'];

  const MALE = 0;
  const FEMALE = 1;

  const people = [];

  function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  let nextId = 0;
  function createPerson(gender) {
    const firstNames = gender === MALE ? boyNames : girlNames;
    return {
      id: ++nextId,
      first: firstNames[getRandomNumber(firstNames.length - 1)],
      last: lastNames[getRandomNumber(lastNames.length - 1)],
      gender: gender,
      // spouse: undefined
      print: function () {
        console.log(`id: ${this.id} first: ${this.first} last: ${this.last} gender: ${this.gender} spouse: ${this.spouse?.first} ${this.spouse?.last} ${this.spouse?.id}`);
      }
    };
  }

  /*for(let i = 0; i < 40; i++) {
    const male = createPerson(MALE);
    const female = createPerson(FEMALE);

    male.spouse = female;
    female.spouse = male;

    people.push(male);
    people.push(female);
  }*/

  for(let i = 0; i < 40; i++) {
    const p = createPerson(getRandomNumber(1));

    /*if (i % 2) {
      p.spouse = people[i - 1];
      people[i - 1] = p.spouse;
    }*/
    people.push(p);
  }

  people.forEach(p => {
    if (!p.spouse) {
      const potentialSpouses = people.filter(p2 => p2.gender !== p.gender && !p2.spouse);
      if (potentialSpouses.length) {
        //p.spouse = potentialSpouses[getRandomNumber(potentialSpouses - 1)];
        //p.spouse.spouse = p;
        const match = potentialSpouses[getRandomNumber(potentialSpouses.length - 1)];
        p.spouse = match;
        match.spouse = p;
      }
    }
  });

  // console.log(people);
  people.forEach(p => p.print());

  console.log(people.filter(p => p.gender === MALE));
  console.log(people.filter(p => p.gender === FEMALE));


})();
//(function () {
'use strict';

function createPerson(first, last) {
  let _first = first;
  let _last = last;

  return {
    //_first: first,
    //_last: last,

    set first(first) {
      if (!first || !first.trim().length) {
        throw new Error('first name can not be empty');
      }
      _first = first;
    },
    get first() {
      return _first;
    },
    set last(last) {
      if (!last || !last.trim().length) {
        throw new Error('last name can not be empty');
      }
      _last = last;
    },
    get last() {
      return _last;
    },

    get fullName() {
      return `${this.first} ${this.last}`;
    },
    set fullName(fullname) {
      const names = fullname.split(' ');
      this.first = names[0];
      this.last = names[1];
    }
  };
}

const potus = createPerson('Joe', 'Biden');
//potus.first = '';
potus.last = 'Peppard';
console.log(potus);
console.log(potus.fullName);
potus.fullName = 'Donald Trump';
console.log(potus.fullName);

class Person {
  #first;
  #last;

  set first(first) {
    if (!first || !first.trim().length) {
      throw new Error('first name can not be empty');
    }
    this.#first = first;
  }
  get first() {
    return this.#first;
  }
  set last(last) {
    if (!last || !last.trim().length) {
      throw new Error('last name can not be empty');
    }
    this.#last = last;
  }
  get last() {
    return this.#last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(fullname) {
    const names = fullname.split(' ');
    this.first = names[0];
    this.last = names[1];
  }
}

const vpotus = new Person();
vpotus.first = 'Kamala';
vpotus.last = 'Harris';

//vpotus.last = '';
vpotus.fullName = 'Mike Pence';


class Person2 {
  constructor() {
    let _first;
    let _last;

    Object.defineProperty(this, 'fullName', {
      get() {
        return `${_first} ${_last}`;
      },
      set(fullname) {
        const names = fullname.split(' ');
        this.first = names[0];
        this.last = names[1];
      }
    });

    Object.defineProperty(this, 'first', {
      set(first) {
        if (!first || !first.trim().length) {
          throw new Error('first name can not be empty');
        }
        _first = first;
      },
      get() {
        return _first;
      }
    });

    Object.defineProperty(this, 'last', {
      set(last) {
        if (!last || !last.trim().length) {
          throw new Error('last name can not be empty');
        }
        _last = last;
      },
      get() {
        return _last;
      }
    });
  }
}

const potus2 = new Person2();
console.log(potus2);
//}());
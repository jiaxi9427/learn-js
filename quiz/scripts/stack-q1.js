class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  get persons() {
    return this._persons;
  }

  set persons(newPersons) {
    if (Array.isArray(newPersons)) {
      this._persons = newPersons;
    } else {
      throw new Error('Invalid input: persons must be an array');
    }
  }

  push(p) {
    if (typeof p === 'object' && p !== null && 'name' in p && 'age' in p) {
      this._persons.push(p);
    } else {
      throw new Error('Invalid person object');
    }
  }

  pop() {
    if (this._persons.length > 0) {
      return this._persons.pop().age;
    } else {
      throw new Error('No persons to pop');
    }
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}];
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop()); 
console.log(pstack.pop()); 
console.log(pstack.persons); 

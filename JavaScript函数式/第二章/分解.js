class Person {
  constructor(firstName, lastName, ssn){
    this._firstName = firstName;
    this._lastName = lastName;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }
  get ssn(){
    return this._ssn;
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get address(){
    return this._address;
  }
  get birthYear() {
    return this._birthYear;
  }
  set birthYear(year){
    this._birthYear = year;
  }
  set address (addr){
    this._address = addr;
  }
  toString(){
    return `Person(${this._firstName},${this._lastName})`;
  }
}
class Student extends Person{
  constructor(firstName, lastName, ssn, school){
    super(firstName, lastName, ssn, school);
    this._school = school;
  }
  get school(){
    return this._school;
  }
}


class Address {
  constructor(addr){
    this._address = addr; 
  }
  country(){
    return this._address;
  }
}
var curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State');
curry.address = new Address('US')
// console.log(curry.address.country());

var turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton');
turing.address = new Address('England');

var church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton');
church.address = new Address('US');

var kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton');
kleene.address =  new Address('US');

function selector(country, school) {
  return function(strudent){
    return strudent.address.country()===country&&strudent.school===school
  }
}
var findStrudentsBy = function(friends, selector) {
  // console.log(friends);
  return friends.filter(selector);
}

const f = findStrudentsBy([curry, turing, church, kleene],selector('US', 'Princeton'));
console.log(f);
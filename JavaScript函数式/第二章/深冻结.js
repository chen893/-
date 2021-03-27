class Person{
  constructor(firstname, lastname, number){
    this._firstname = firstname;
    this._lastname = lastname;
    this._number = number;
  }
  get firstname(){
    return this._firstname;
  }
  get lastname(){
    return this._lastname;
  }
  get number(){
    return this._number;
  }
  set firstname(name){
    this._firstname = name;
  }
  set lastname(name){
    this._lastname = name;
  }
  set number(num){
    this._number = num;
  }
}
function zipCode (code, location) {
  let _code = code;
  let _location = location || '';
  return {
    code: function() {
      return _code;
    },
    location: function(){
      return _location;
    },
    fromString: function(str) {
      let parts = str.split('-');
      return zipCode(parts[0],parts[1]);
    },
    toString: function() {
      return _code + '-' + _location;
    }
  }
}



// var person = Object.freeze(new Person('Hakell', 'Curry', '11111'));
var person = new Person('a', 'a' ,'11')
console.log(person);
person.firstname = 'bd';

console.log(person.firstname);
console.log(person.firstName());

class Address {
  constructor(country, state, city, zip, street) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }
  get street(){
    return this._street;
  }
  get city() {
    return this._city;
  }
  get state() {
    return this._state;
  }
  get zip() {
    return this._zip;
  }

  get country (){
    return this._country;
  }
}

var person = new Person('Haskell', 'Curry', '111-111');
person.address = new Address('US', 'NJ', 'Princeton' , zipCode('08544', '1234'), 'Alexander St.');
person = Object.freeze(person);
person.address._country = 'France';
person.address.country;

var isObject = (val) => val && typeof val ==='object';
function deepFreeze(obj) {
  if(isObject(obj)&& !Object.isFrozen(obj)){
    Object.keys(obj).forEach(name=>deepFreeze(Obj[name]));
    Object.freeze(obj);
  }
  return obj;
}


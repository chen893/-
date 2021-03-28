class Person{
  constructor(country){
    this.country = country;
  }
}

let tom = new Person('US');
let a = new Person('CHINA');
let b = new Person('CHINA');
let persons = [tom, a, b];
let check = function(country){
  return persons.filter((item)=>item.country==country);
}
console.log(check('CHINA'));
console.log(persons);


function printPeople(people, selector, printer) {
  people.forEach(function(person) {
    if(selector(person)){
      printer(person);
    }
  })
}
var inUs = person => person.address.country === 'US';
printPeople(people, inUs, console.log);
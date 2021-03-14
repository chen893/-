function Person (name){
  this.name = name;
}

Person.prototype.sayName= function(){
  console.log(this.name);
}

let tom = new Person('TOM')
tom.sayName();

console.log(tom instanceof Person);
console.log(tom instanceof Object);

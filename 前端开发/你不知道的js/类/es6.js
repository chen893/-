class PersonClass{
  constructor(name){
    this.name = name;
  }
  sayName(){
    console.log(this.name);
  }
}

let person = new PersonClass('Nicholas');
person.sayName();

console.log(person instanceof PersonClass);
console.log(perosn instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);



let PersonType2 = (function(){
  "use strict";

  const PersonType2 = function(name){
    if(typeof new.target === 'undefined'){
      throw new Error('必须通过调用关键词new调用构造函数');
    }
    this.name = name;
  }

  Object.defineProperty(PersonType2.prototype,"sayName",{
    value: function(){
      if(typeof new.target !== 'undefined') {
        throw new Error('不可使用关键词new 调用该方法');
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  return PersonType2;
}());


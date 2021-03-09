//无操作转发代理
let target = {};
let p = new Proxy(target, {});
p.a = 37;

console.log(target.a);


//验证
let validator = {
  set: function(obj, prop, value) {
    if(prop === 'age') {
      if(!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if(value) {
        throw new RangeError('The age seems invalid');
      }
    }

    obj[prop] = value;
    return true;
  }
}

let person = new Proxy({}, validator);
person.age = 100;

console.log(person.age);
person.age = 'young';
person.age = 300;
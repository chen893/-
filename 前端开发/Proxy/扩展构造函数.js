function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, "constructor"
  );

  // console.log('descriptor');
  // console.log(descriptor);
  base.prototype = Object.create(sup.prototype);

  var handle = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handle);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
}

var Boy = extend(Person, function(name, age) {
  this.age = age;
})
Boy.prototype.sex = 'M';

var Peter = new Boy('Peter',13);
console.log(Peter.sex);
console.log(Peter.name);
console.log(Peter.age);


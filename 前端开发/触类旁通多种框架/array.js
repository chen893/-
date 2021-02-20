const arrExtend = Object.create(Array.prototype)
console.log(Array.prototype);
const arrMethods = ['push', 'pop']

arrMethods.forEach(method => {
  const oldMethod = Array.prototype[method];
  const newMethod = function(...args) {
    oldMethod.apply(this, args);
    console.log(`${method} 方法被执行了`);
  }
  arrExtend[method] = newMethod;
})
Array.prototype = Object.assign(Array.prototype, arrExtend)
let array = [1, 2, 3];
// Array.prototype = Object.assign(Array.prototype, {push(){console.log('test');}})

array.push(4);
console.log(array);

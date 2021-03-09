var cache = {};
var mult = function () {
  var args = Array.prototype.join.call(arguments, ',');
  console.log(args);
  if (cache[args]) {
    return cache[args];
  }
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
    // console.log(a);
  }
  return cache[args] = a;
}
console.log(mult(3, 2, 3));
console.log(mult(3, 2, 3));
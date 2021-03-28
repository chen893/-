function negate(func){
  return function(){
    return !func.apply(null, arguments);
    // return !func(...arguments)
  }
}
function isNull(val) {
  console.log(val);
  return val===null;
}

var isNotNull = negate(isNull);
// isNotNull(null);
console.log(isNotNull(null));
// isNotNull({});
console.log(isNotNull({}));


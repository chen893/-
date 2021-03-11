var mult = function(){
  let result = arguments[0];
  for(let i = 1; i<arguments.length;i++){

    result = result * arguments[i];
  }
  return result;
}

var plus = function(){
  let result = arguments[0];
  for(let i = 0; i<arguments.length;i++){
    result = result+arguments[i];
  }
  return result;
}

var createProxy = (function(fn){
  let cache = [];

  return function(){
   let name = Array.prototype.join.apply(arguments,[','])
   if(cache[name]){
     return cache[name];
   }
  return cache[name]= fn(...arguments) 
  }
})

let proxyPlus = createProxy(plus);
let proxyMult = createProxy(mult)


console.log(proxyPlus(1,23,4));
console.log(proxyMult(1,23,4));
// console.log(createProxy(1,23,4));
var mult = function(){
  let result = arguments[0];
  for(let i = 1; i<arguments.length;i++){
    console.log('-');
    result = result * arguments[i];
  }
  return result;
}

var proxyMult = (function(){
  let cache = [];

  return function(){
   let name = Array.prototype.join.apply(arguments,[','])
   if(cache[name]){
     return cache[name];
   }
  return cache[name]= mult(...arguments) 
  }
})()
console.log(proxyMult(1,23,4));
console.log(proxyMult(1,23,4));
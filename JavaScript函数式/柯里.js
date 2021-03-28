var add = function (a, b){
  return function(c){
    return function(d, e, f){
      return function(){
        return a+b+c+d+e+f
      };
    }
  }
}

console.log(add(1,2)(3)(4,5,6)());
function foo(something) {
  this.a = something;
}
var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);

var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);


if(!Function.prototype.bind){
  Function.prototype.bind = function(oThis){
    if(typeof this !== 'function'){
      throw new TypeError("Function.prototype.bind - what is trying"+
      "to be bound is not callable")
    };
  }

  var aArgs = Array.prototype.slice.call(arguments, 1);
  fToBind = this;
  fNOP = function(){};
  fBound = function(){
    return fToBind.apply(
      (this instanceof fNOP && 
       oThis? this: oThis
      ),
      aArgs.concat(
        Array.prototype.slice.call(arguments)
      )
    )
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  }
}

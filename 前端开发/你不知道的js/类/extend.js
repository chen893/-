// function Rectangle(length,width){
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function(){
//   return this.length*this.width;
// }

// class Squre extends Rectangle{
//   constructor(length) {
//     super(length,length);
//   }
// }

// let squre = new Squre(5);
// console.log(squre.getArea());


function Rectangle(length,width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function(){
  return this.length*this.width;
}

function getBase(){
  return Reacangle;
}
class Squre extends Rectangle{
  constructor(length) {
    super(length,length);
  }
}

var x = new Squre(3);

console.log(x.getArea());
console.log(x instanceof Squre);
console.log(x instanceof getBase);
console.log(x instanceof Rectangle);
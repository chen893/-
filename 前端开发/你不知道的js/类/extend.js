function Rectangle(length,width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function(){
  return this.length*this.width;
}

class Squre extends Rectangle{
  constructor(length) {
    super(length,length);
  }
}

let squre = new Squre(5);
console.log(squre.getArea());
let SerializableMixin = {
  serialize(){
    return JSON.stringify(this);
  }
}
let AreaMixin = {
  getArea(){
    return this.length * this.width;
  }
}

function mixin(...mixins){
  var base = function(){};
  Object.assign(base.prototype,...mixins);
  return base;
}

function mixin(...mixins){
  var base = function(){
  }

  Object.assign(base.prototype,...mixins);
  return base;
}

class Square extends mixin(AreaMixin,SerialiazbleMixin){
  constructor(length){
    super();
    this.length = length;
    this.width = length;
  }
}


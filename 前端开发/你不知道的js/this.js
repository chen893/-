function baz(){
  console.log(this.a+ 'test');
  // debugger;
  // bar();
}
var o = {
  a:100,
}

function bind(fn, obj){
  return fn.call(obj)
}

let a = bind(baz,o);

// function baz() {
//   console.log('baz');
//   bar();
//   debugger
// }
// function bar() {
//   console.log('bar');
//   foo();

//   debugger
// }
// function foo() {
//   console.log('foo');

//   debugger
// }

// baz()

function  foo(p1,p2) {
  this.val = p2;
}
var o = {}
var bar = foo.bind(o, 'p1');
bar('p2')
console.log(o);
var baz = new bar('p2');

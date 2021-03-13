function foo(){
  console.log(this.a);
}
var a = 2;
var o = {a:3, foo:foo};
var p = {a:4};
o.foo();


/*赋值表达式p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是foo()而不是
p.foo()或者o.foo()。根据我们之前说过的，这里会应用默认绑定
*/
(p.foo = o.foo)();
function foo(a,b){
  console.log(a+b);
}

foo.apply(null,[1,5]);
foo(...[1,5])


// 柯里化
let a = foo.bind(null,1);
a(5);


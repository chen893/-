function foo(a,b){
  console.log("a:"+a+",b:"+b);
  
}
  var _null = Object.create(null);
  console.log(_null);

  console.log({});
  foo.apply(_null,[2,3]);
  var bar = foo.bind(_null,2);
  bar(3)




let t = (function(){
  let i=0 ;
  console.log('test');
  return function(){
    i++;
    console.log(i);
  }
})                            

t();
t();
// console.log('test');
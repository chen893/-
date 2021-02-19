// let a=function test(){
// // function  hh() {
//     console.log('test');
//   // }
//   // hh()
// // console.log(hh());
// }
// // test.n='fs';
// a()
// console.log(a);
for(var i =0;i<10;i++){
  (function(j){
    setTimeout(()=>console.log(j),0);
    // console.log(j);
  })(i)

}

let n: number=1;
let a: string='test';
let m: number[] =[1,2];
let b: boolean = false;
let yuan:[string,number]= ['test',123];
enum Color  {Red, Green, Blue}
let c:Color=Color.Red;
console.log(c);
let value: number|null|undefined;
value=100;
value=null;
value= undefined;

var str = '1';
var str2: number = <number> <any> str
console.log(str2);

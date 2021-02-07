function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i=0; i< length;i++) {
    result[i] =value;
  }
  return result;
}
createArray(3,'x');

// 泛型
function create<T> (length: number, value: T): Array<T>{
  let result: T[];
  for(let i = 0; i<length;i++){
    result[i]=value;
  }
  return result;
}

create<string>(8,'x');


//多个类型参数

function swap<T,U> (p:[T,U]): [U,T]{
  return [p[1],p[0]];
}

swap<string,number>(['t',9]);



//泛型约束
// function loggingIdentity<T>(arg:T):T{
//   return arg;
// }


interface Lengthwish {
  length: number;
}
function loggingIdentity<T extends Lengthwish>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function copyFields<T extends U,U>(target: T, source: U): T {
  for(let id in source) {
    // target[id] = (source)[id];
    target[id]= (<T>source)[id];
  }
  return target;
}

let x = {a: 1, b: 2, c: 3, d: 4};
copyFields(x,{ b: 10,d: 20});

interface d{
  (source: string, subString: string): boolean;
}

let mySearch: d;

interface IFunction<T> {
  (value:T,length: number): Array<T>
}
let createArr: IFunction<any>



interface IFun<T>{
  (value: T, length: number): Array<T> 
} 

let createA: IFun<string>;
createA = function<T>(value: T,length: number): Array<T> {
  let result : T[]= [];
  for(let i = 0; i<length; i++) {
    result [i]= value;
  }
  return result;
}


class GenenicNumber<T>{
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNUmber = new GenenicNumber<number>();
myGenericNUmber.zeroValue = 0;
myGenericNUmber.add = function(x,y) { return x+y};



type Name = string;
type NameResolver = () => string;
type NameResolverOrName = Name | NameResolver;

function ( n: NameResolverOrName) :NameResolverOrName{
  if(typeof n == 'string'){
    return n;
  }else{
    return n();
  }
}
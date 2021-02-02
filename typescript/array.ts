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



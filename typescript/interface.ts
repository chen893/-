interface Person {
  name: string;
  age: number;
}
let aPerson: Person ={
  name: 'test',
  age: 129
}

interface IPerson{
  name: string;
  age?: number;
}

let Tom: IPerson={
  name:'tom'
}


//一旦定义了任意属性，那么属性和可选属性的类型都必须是它的类型的子集
// interface IA{
//   name:number;
//   [propName:string]:string;
// }
// let jack: IA ={
//   name:200,
//   test:'ss',
//   ff:'sf',
// }

interface IOnly {
  readonly id: number;
  name: string;
  age?: number;
  [propName:string]: any;
}

let b:IOnly={
  id:12,
  name:'f',
  age: 123,
}
// b.id=10; 报错 只读属性

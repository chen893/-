let t = new Proxy({},{
  set(target,name,proxy){
    target[name]=1;
    // return Reflect.set(...arguments);
    return true;
  }
})

let a = t.a = false;
console.log(a);
console.log(t);
a = t.a
console.log(a);
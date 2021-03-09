let max=10;
let proxy = new Proxy({},{
  get(target,protoType,proxy){
    if(--max>0)
    console.log(proxy[protoType]);
    return '['+target[protoType]+']'
  }
})

proxy.t= 100;
console.log(proxy.t);
let products = new Proxy({
  browsers: ['Internet', 'Netscape']
},{
  get(target, name){
    if(name === 'lastBrowser'){
      return target.browsers[target.browsers.length-1];
    }
    return target[name];
  },
  set(target, name, value) {
    if(name === 'lastBrowser') {
      target.browsers.push(value);
      return;
    }
    if(typeof value === 'string') {
      value = [value];
    }
    target[name] = value;
    return true;
  }
})

console.log(products.browsers);
products.browsers = 'Firefox';
console.log(products.browsers);

products.lastBrowser = 'Chrome';
console.log(products.browsers);
console.log(products.lastBrowser);
const handle = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  }
};

const p = new Proxy({}, handle);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);
let products = new Proxy([
  { name: 'Firefox', type: 'browser'},
  { name: 'SeaMonkey', type: 'browser'},
  { name: 'Thunderbird', type: 'mailer'}
], {
  get(obj, prop){
    // console.log('--------');
    // console.log(obj);
    if(obj[prop]) return obj[prop];

    if(prop === 'number') return obj.length;

    if(prop === 'number') return obj.length
    
    let result, types={};
    for( product of obj){
      if( product.name === prop) result = product;

      if(product.type in types) {
        types[product.type].push(product);
      }else{
        types[product.type]=[product];
      }
    }
    if(result) return result;
    if(prop in types) return types[prop];
    if(prop === 'types') return Object.keys(types);

    // if(prop === 'browser')  return obj;
  }
})

// console.log(products[0]); // { name: 'Firefox', type: 'browser' }
// console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
// console.log(products['Chrome']); // undefined // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
// console.log(products.types); // ['browser', 'mailer']
// console.log(products.number); // 3
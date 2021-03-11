/*单一职责原则指的是，就一个类而言，应该仅有一个引起他变化的原因。
如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起他变化的原因可能有多个。
面向对象设计鼓励将行为分布到细粒度的对象之中，如果一个对象承担的职责过多，
等于把这些职责耦合到了一起，这种耦合会导致脆弱和低内聚的设计。*/

var synchronousFile = function(id){
  console.log('开始同步文件，id为：'+id);
}

// var proxySynchronousFile = function(id){
//   let cache =[],timer;
//   cache.push(id);
//   if(timer){
//     return ;
//   }
//   timer = setTimeout(function(){
//     synchronousFile(cache.join(','));
//     cache.length = 0;
//     clearTimeout(timer);
//     timer = null;
//   },2000)
// }

var proxySynchronousFile = (function(){
  var cache=[],timer;
  return function(id){
    cache.push(id);
    if(timer){
      return ;
    }

    timer = setTimeout(function(){
      synchronousFile(cache.join(','));
      cache.length = 0;
      clearTimeout(timer);
      timer = null;
    },2000)
  }
})()

var checkbox = document.getElementsByTagName('input');

for(let i = 0,c; c=checkbox[i++];){
  c.onclick = function(){
    if(this.checked === true){
      proxySynchronousFile(this.id);
    }
  }
}
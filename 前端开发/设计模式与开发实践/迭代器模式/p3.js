var Iterator = function(obj){
  var current = 0;
  var next = function(){
    current++;
  };
  var isDone = function(){
    if(current>=obj.length) return true;
    else return false;
  }
  var getValue = function(){
    return obj[current]
  }
  return {
    current: current,
    next: next,
    isDone: isDone,
    value:getValue
  } 
}

var compare = function(iterator1, iterator2){
  if(iterator1.length != iterator2.length) {
    throw new Error('iterator1 和 iterator2 不相等')
  }
  while(!iterator1.isDone() && !iterator2.isDone()){
    console.log(iterator1.value());
    if(iterator1.value() != iterator2.value()) {
      throw new Error('iterator1 和 iterator2 不相等')
    }
 
    iterator1.next();
    iterator2.next();
  }
 
  if(iterator1.value() != iterator2.value()) {
    throw new Error('iterator1 和 iterator2 不相等')
  }
  console.log('相等');
}

var t1 = Iterator([1,3,4])
var t2 = Iterator([1,3,4,5])
compare(t1,t2)
var each = function(arr,callback){
  for(let i = 0; i<arr.length; i++){
    callback.call(arr,i,arr[i])
  }
}
function fn (i,item){
  console.log('index:'+i);
  console.log('item:'+item);
}
each([321,1,123],fn)
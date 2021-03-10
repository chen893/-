var getSingle = function( fn ){
  var result ;
  return function(){
    return result || (result = fn.apply(this,arguments))
  }
}
var createLoginLayer = function() {
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}

var createSingleLoginLayer = getSingle( createLoginLayer );

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};


var createScript = function(){
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
}

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleIframe();
  loginLayer.src = 'http://baidu.com';
}
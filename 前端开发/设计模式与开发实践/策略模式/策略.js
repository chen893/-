var strategies = {
  isNonEmpty:  function(value, errorMsg){
    return errorMsg;
  },
  minLength: function(value, length, errorMsg){
    if(value.length<length){
      return errorMsg;
    }
  },
  isMobile: function(value, errorMsg) {
    if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
      return errorMsg;
    }
  }
}

var Validator = function(){
  this.cache = [];
}

Validator.prototype.add = function( dom, rule, errorMsg){
  var ary = rule.split(':');
  this.cache.push(function(){
    var strategy = ary.shift();
    ary.unshift(dom.value);
    ary.push(errorMsg);
    return strategies[strategy].apply(dom,ary);
  });
};

Validator.prototype.start = function(){
  for(var i = 0, val)
}


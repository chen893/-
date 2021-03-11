var Animate = function ( dom ){
  this.dom = dom;          //进行运动的dom节点
  this.startTime =  0;     //动画运动时间
  this.startPos = 0;       //动画开始时,dom节点的位置，即dom的初始位置
  this.endPos = 0;         //动画结束时,dom节点的位置，即dom的目标位置
  this.propertyName = null;//dom节点需要被改变的css属性名
  this.easing = null;      //缓动算法
  this.duration = null;    //动画持续时间
}

Animate.prototype.start = function(propertyName, endPos, duration, easing){
  this.startTime = +new Date;
  this.startPos = this.dom.getBoundingClientRect()[propertyName];
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing];

  var self = this;
  var timeId = setInterval(function(){
    if(self.step()===false){
      clearInterval(timeId);
    }
  },19)
}

Animate.prototype.step = function(){
  var t = +new Date;   //取得当前时间
  if(t>= this.startTime + this.duration){
    this.update(this.endPos);
    return false;
  }
  var pos = this.easing(t-this.startTime,this.startPos,this.endPos-this.startPos,this.duration);
  this.update(pos);
}


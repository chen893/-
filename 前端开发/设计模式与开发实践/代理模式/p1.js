var Flower = function(){};

var xiaoming = {
  sendFlower: function(target){
    var flower = new Flower();
    target.receiverFlower(flower);
  }
};

var A = {
  listenGoodMood:function(fn){
    setTimeout(fn(),1000)
  },
  receiverFlower: function(flower){
    console.log('收到花'+flower);
  }
}

var B = {
  receiverFlower: function(flower){
    A.listenGoodMood(function(){
      A.receiverFlower(flower);
    })
  }
}

xiaoming.sendFlower(B);